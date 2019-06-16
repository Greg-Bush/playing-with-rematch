import { connect } from "react-redux";
import React from "react";
import OpenWeatherMap from 'react-open-weather-map';
import styled from 'styled-components';

const Div = styled.div`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    border: 1px solid #999;
    padding: 1em;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
`;

interface IProps {
    data?: any;
    fetch: () => void;
}
class Weather extends React.Component<IProps> {
    componentDidMount() {
        this.props.fetch();
    }
    render() {
        if (!this.props.data) {
            return null;
        }
        return (<Div><OpenWeatherMap data={this.props.data} /></Div>);
    }
}

export default connect((state: any) => ({
    data: state.weather
}), (dispatch: any) => ({
    fetch: dispatch.weather.fetchAsync
}))(Weather);

