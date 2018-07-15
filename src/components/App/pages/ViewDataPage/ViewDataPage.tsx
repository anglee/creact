import { Button } from "antd";
import * as React from "react";
import { IData } from "../../../../types/interfaces/IData";

interface IProps {
  data: IData;
  onRefresh: () => Promise<void>;
}

interface IState {
  isRefreshing: boolean;
}

class ViewDataPage extends React.Component<IProps, IState> {
  public render() {
    return (
      <div>
        <h1>View Data Page</h1>
        <Button type="primary" onClick={this.refresh}>
          Refresh
        </Button>
        <pre>{JSON.stringify(this.props.data, null, 2)}</pre>
      </div>
    );
  }

  private refresh = async () => {
    this.setState({ isRefreshing: true });
    try {
      await this.props.onRefresh();
    } catch (error) {
      console.error(error); // tslint:disable-line no-console
    }
    this.setState({ isRefreshing: false });
  }
}

export default ViewDataPage;
