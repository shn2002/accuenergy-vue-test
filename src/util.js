import http from 'axios'
import { googleConfig } from './config.js'

const apiKey = googleConfig.apiKey


const getGeocode = (cityName) => {
    const geocodingApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(cityName)}&key=${apiKey}`  
    return new Promise((resolve, reject) => {
      http.get(geocodingApiUrl)
        .then(response => {
          const data = response.data;
          if (data.status === 'OK' && data.results.length > 0) {
            const location = data.results[0].geometry.location;
            const latitude = location.lat;
            const longitude = location.lng;
            resolve({ latitude, longitude });
          } else {
            reject(new Error('can not get latitude and longitude'));
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  };


  const getTimeZone = (lat, long) => {
    const timezoneApiUrl = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${long}&timestamp=${Math.floor(Date.now() / 1000)}&key=${apiKey}`;
    return new Promise((resolve, reject) => {
      http.get(timezoneApiUrl)
        .then(response => {
          const data = response.data;
          if (data.status === 'OK' ) {
            const timeZoneId = data.timeZoneId;
            const localTime = new Date().toLocaleTimeString('en-US', { timeZone: timeZoneId });
            resolve({ timeZoneId, localTime });
          } else {
            reject(new Error('can not get latitude and longitude'));
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  
export { getGeocode, getTimeZone };