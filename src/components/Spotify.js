import axios from "axios";
import React, { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-player";

const SpotifyEmbed = () => {

    const size = {
        width: '100%',
        height: 300,
    }

    const view = 'list'
    const theme = 'black'

  return (
    <div>
      <div class="flex flex-col text-left w-full mb-14">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Spotify
            </h1>
            <div class="h-1 w-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded"></div>
          </div>
      <SpotifyPlayer
        uri="https://open.spotify.com/show/736rhmW7vilNgkFFo8aDz4?si=54933394583c4e43"
        size={size}
        view={view}
        theme={theme}
      />
            <SpotifyPlayer
        uri="https://open.spotify.com/show/3ptiw7nOKh5vsMoar79YGc?si=f644fe4e1d524ab3"
        size={size}
        view={view}
        theme={theme}
      />

<SpotifyPlayer
        uri="https://open.spotify.com/show/7e3nj61vDv0NUMC1inV0vc?si=d46f6b39e84c4baa"
        size={size}
        view={view}
        theme={theme}
      />
    </div>
  );
};

export default SpotifyEmbed;
