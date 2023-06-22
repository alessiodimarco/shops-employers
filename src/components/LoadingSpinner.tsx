import { CircularProgress } from "@material-ui/core";

export const LoadingSpinner = () => (
  <div className="is-loading">
    <div className="is-loading-container">
      <CircularProgress color="secondary" />
    </div>
  </div>
);
