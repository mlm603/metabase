import { createSelector } from "reselect";
import _ from "underscore";

export const getEditingPulse = state => {
  const pulse = state.pulse.editingPulse;
  const dashboard = state.dashboard;
  const dashcards = {...dashboard.dashcards};
  const cards_arr = [];

  for (let i=1; i<Object.keys(dashcards).length + 1; i++){
    cards_arr.push({ id: dashcards[i].card_id, include_csv: false, include_xls: false })
  }

  const obj_to_return = (dashboard.dashboardId ?
    {...pulse,
      cards: cards_arr,
    } :
    pulse
  )

  return obj_to_return;
}
export const getPulseFormInput = state => state.pulse.formInput;

export const hasLoadedChannelInfoSelector = createSelector(
  [getPulseFormInput],
  formInput => !!formInput.channels,
);
export const hasConfiguredAnyChannelSelector = createSelector(
  [getPulseFormInput],
  formInput =>
    (formInput.channels &&
      _.some(Object.values(formInput.channels), c => c.configured)) ||
    false,
);
export const hasConfiguredEmailChannelSelector = createSelector(
  [getPulseFormInput],
  formInput =>
    (formInput.channels &&
      _.some(
        Object.values(formInput.channels),
        c => c.type === "email" && c.configured,
      )) ||
    false,
);

export const getPulseCardPreviews = state => state.pulse.cardPreviews;

export const getPulseId = (state, props) =>
  props.params.pulseId ? parseInt(props.params.pulseId) : null;

export const getDashboardId = (state, props) =>
  props.params.dashboardId ? parseInt(props.params.dashboardId) : null;
