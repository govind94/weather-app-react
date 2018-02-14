<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDi91PrtWMRoFzkRyLOFBgohm1sVEp8N1s&callback=initMap" type="text/javascript"></script>

import React, { Component } from "react";

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
