import React, {useCallback, useEffect, useState} from 'react';
import {Supervisor} from '../../definitions';
import {FormDropDownItem} from '../../components/FormDropDown/types';
import {TFormResult} from './types';
import {supervisorSubscription} from '../methods';

const useSupervisorSubscription = (handleClear: () => void) => {
  const [state, setState] = useState<{
    isLoading: boolean;
    isError: boolean;
    supervisors: Array<Supervisor>;
    data: Array<FormDropDownItem<string>>;
    formResult: TFormResult | undefined;
  }>({
    isError: false,
    isLoading: false,
    supervisors: [],
    data: [],
    formResult: undefined,
  });

  const fetchSupervisors = () => {
    const doFetch = async () => {
      const response: Array<Supervisor> =
        await supervisorSubscription?.getSupervisors();
      if (!response) return;

      const newData = response
        // filter by jurisdication without number, sort by jurisdiction, sort by last name, first name
        .filter(a => Number.isNaN(Number(a.jurisdiction)))
        .sort((a, b) => a.jurisdiction.localeCompare(b.jurisdiction))
        .sort((a, b) => {
          if (a.jurisdiction === b.jurisdiction) {
            const compare = a.lastName.localeCompare(b.lastName);
            if (compare !== 0) return compare;
            else a.firstName.localeCompare(b.firstName);
          }
          return a.jurisdiction.localeCompare(b.jurisdiction);
        })
        .map(sup => ({
          label: `${sup.jurisdiction} - ${sup.lastName}, ${sup.firstName}`,
          value: sup.id,
        }));

      setState({
        ...state,
        isLoading: false,
        isError: false,
        supervisors: response,
        data: newData,
      });
    };

    doFetch().catch(e => {
      setState({
        ...state,
        isLoading: false,
        isError: true,
      });
    });
  };

  useEffect(() => {
    setState({
      ...state,
      isLoading: true,
    });

    fetchSupervisors();
  }, []);

  const refresh = useCallback(() => {
    setState({
      ...state,
      isLoading: true,
    });

    fetchSupervisors();
  }, [state]);

  const submit = useCallback(
    (
      fName: string,
      lName: string,
      supId: string,
      phone: string,
      email: string,
    ) => {
      const doSubmit = async () => {
        const supervisor = state.supervisors.find(sup => sup.id === supId);
        const formResult: TFormResult =
          await supervisorSubscription?.submitEmployee(
            fName,
            lName,
            supervisor,
            phone,
            email,
          );

        if (formResult.SUCCESS) {
          handleClear();
          setState({
            ...state,
            formResult: undefined,
          });
        } else {
          setState({
            ...state,
            formResult: formResult,
          });
        }
      };

      doSubmit().catch(err => {
        console.log('Error processing form', err);
      });
    },
    [state],
  );

  return {
    isError: state.isError,
    isLoading: state.isLoading,
    data: state.data,
    formResult: state.formResult,
    refresh,
    submit,
  };
};

export default useSupervisorSubscription;
