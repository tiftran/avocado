import { EXPERIMENT_DATA_RECEIVED } from "avocado/state/action-types";

export const fetchExperiments = () => dispatch => {
  fetch("https://experimenter.services.mozilla.com/api/v1/experiments/")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: EXPERIMENT_DATA_RECEIVED,
        data: data
      });
    });
};
