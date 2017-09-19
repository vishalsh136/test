class Chart extends Component {
  componentDidMount() {
    this._updateChart();
  }
  componentDidUpdate() {
    this._updateChart();
  }
  _updateChart() {
    const chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: this.props.columns,
        type: this.props.chartType
      }
    });
  }
  render() {
    return <div id="chart">hi</div>;    
  }
}

class NewApp extends Component {
  constructor(props) {
    super(props);
    this._setBarChart = this._setBarChart.bind(this);
    this._setLineChart = this._setLineChart.bind(this);
    this.state = {
      chartType: 'line'
    };
  }
  _setBarChart() {
    this.setState({ chartType: 'bar' });
  }
  _setLineChart() {
    this.setState({ chartType: 'line' });
  }
	render() {
		return (
      <div className="app-wrap">
        <Chart 
          columns={columns}
          chartType={this.state.chartType} />
        <p>
          Chart Type
          <button onClick={this._setBarChart}>bar</button> 
          <button onClick={this._setLineChart}>Line</button>
        </p>
      </div>
    );
  }
}

export default NewApp;