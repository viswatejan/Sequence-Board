const SoundAssets = {
    placeSound: require('../assets/sounds/place.mp3'),
    removeSound: require('../assets/sounds/remove.mp3'),
    selectSound: require('../assets/sounds/select.mp3'),
    callback: _callback
};


const _callback = (error, sound) => {
    if (error) {
      console.log(error.message);
    }
};

export default SoundAssets;