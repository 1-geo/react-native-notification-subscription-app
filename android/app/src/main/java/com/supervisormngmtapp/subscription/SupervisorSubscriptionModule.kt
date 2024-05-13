package com.supervisormngmtapp.subscription

import android.text.TextUtils
import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.WritableArray
import org.json.JSONArray
import org.json.JSONException
import java.io.BufferedReader
import java.io.IOException
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL


class SupervisorSubscriptionModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    val URL = "https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers"
    val ALPHA_REGEX = "[a-zA-Z]+"
    val TAG = "SubscriptionModule"

    override fun getName() = "SupervisorSubscriptionModule"

    @ReactMethod
    fun submitEmployee(fName: String, lName: String, supervisorJson: ReadableMap?,
                       phone: String, email: String, promise: Promise) {
        val supervisor = Supervisor(
            id = supervisorJson?.getString("id"),
            phone = supervisorJson?.getString("phone"),
            jurisdiction = supervisorJson?.getString("jurisdiction"),
            identificationNumber = supervisorJson?.getString("identificationNumber"),
            firstName = supervisorJson?.getString("firstName"),
            lastName = supervisorJson?.getString("lastName"),
        )

        val formResult = Arguments.createMap()

        when {
            TextUtils.isEmpty(fName) || TextUtils.isEmpty(lName) || supervisor.id === null -> {
                if (TextUtils.isEmpty(fName)) {
                    formResult.putString(FormType.FIRST_NAME, "Please enter your first name")
                }
                if (TextUtils.isEmpty(lName)) {
                    formResult.putString(FormType.LAST_NAME, "Please enter your last name")
                }
                if (supervisor.id === null) {
                    formResult.putString(FormType.SUPERVISOR, "Please select your supervisor")
                }
            }
            else -> {
                if (fName.matches(Regex(ALPHA_REGEX)) && lName.matches(Regex(ALPHA_REGEX))) {
                    if (!TextUtils.isEmpty(email) && !android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
                        formResult.putString(FormType.EMAIL, "Please a valid email")
                    } else {
                        formResult.putString(FormType.SUCCESS, "Successfully subscribed to supervisor!")
                    }
                } else {
                    if (!fName.matches(Regex(ALPHA_REGEX))) {
                        formResult.putString(FormType.FIRST_NAME, "Please enter only alphabets for your first name")
                    }
                    if (!lName.matches(Regex(ALPHA_REGEX))) {
                        formResult.putString(FormType.LAST_NAME, "Please enter only alphabets for your last name")
                    }
                }
            }
        }

        formResult.getString(FormType.SUCCESS)?.let {
            Log.d(TAG, "Successfully subscribed: First Name: ${fName}, Last Name: ${lName}," +
                    " Supervisor: (${supervisor.jurisdiction} - ${supervisor.lastName}, ${supervisor.firstName})")
        }
        promise.resolve(formResult)
    }

    @ReactMethod
    @Throws(IOException::class)
    fun getSupervisors(promise: Promise) {
        try {
            val responseJson = JSONArray(get(URL))

            var i = 0
            val size = responseJson.length()
            val supervisors: WritableArray = Arguments.createArray()

            while (i < size) {
                val obj = responseJson.getJSONObject(i)

                val supervisor = Arguments.createMap()
                supervisor.putString("id", obj.getString("id"))
                supervisor.putString("phone", obj.getString("phone"))
                supervisor.putString("jurisdiction", obj.getString("jurisdiction"))
                supervisor.putString("identificationNumber", obj.getString("identificationNumber"))
                supervisor.putString("firstName", obj.getString("firstName"))
                supervisor.putString("lastName", obj.getString("lastName"))
                supervisors.pushMap(supervisor)

                i++
            }

            try {
                if (supervisors.size() != 0) {
                    promise.resolve(supervisors)
                }
            } catch (e: Exception) {
                promise.reject(e)
            }
        } catch (e: IOException) {
            e.printStackTrace()
        } catch (e: JSONException) {
            e.printStackTrace()
        }
    }

    fun get(url: String): String {
        val result = StringBuilder()
        val urlObj = URL(url)
        val connection = urlObj.openConnection() as HttpURLConnection
        connection.requestMethod = "GET"

        BufferedReader(InputStreamReader(connection.inputStream)).use {
            var inputLine: String?
            while (it.readLine().also { line -> inputLine = line } != null) {
                result.append(inputLine)
            }
        }

        return result.toString()
    }

}