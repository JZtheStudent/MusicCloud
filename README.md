# README

[link to live site:](https://music-cloud420.herokuapp.com/#/discover)

# Welcome to MusicCloud

# About the Project
Everyone's heard about Soundcloud. It's a music application similar to Spotify and Apple Music, except users can upload their own tracks. The project was creating with a Ruby on Rails backend and React/Redux frontend. Assets are stored using Amazon's AWS S3. 

# Special Features

## Music Player

![image](https://user-images.githubusercontent.com/79537340/136595801-a0452d44-3fd8-476b-847f-f882c6d20b59.png)

Initially, making a music player that is globally available in the application was baffling for me. However, I was able to resolve this issue by setting the current track as a slice of state, as seen in the screenshot below. With React and Redux, every time a user clicks on a track-play button, the application state would change and trigger a re-render for the player!

![image](https://user-images.githubusercontent.com/79537340/136596497-5fac63e1-c711-4cd4-8bde-96e98f2f89fd.png)

In addition, my use of React hooks (including useEffect) enabled the functional component to watch out for updates on specific slices of application state and make adjustments to the audio player.

```javascript

  useEffect(() => {
    setTrackTitle(props.currentTrack ? props.currentTrack.title : "No song playing");
    setTrackArtist(props.currentTrack ? props.currentTrack.artist.username : "")
    setTrackAlbumArtUrl(props.currentTrack ? props.currentTrack.albumArt : "") 
    setIsPlaying(props.currentTrack ? (audioPlayer.current.paused ? false : true) : false);
    animationRef.current = requestAnimationFrame(whilePlaying);
    const seconds = getDuration();
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

```

## Deleting Tracks

![image](https://user-images.githubusercontent.com/79537340/136597282-537d6f7a-2db6-41e0-8479-2054829d994d.png)

When a user wants to delete one of their tracks through their profile page, they will be taken to a special confirmation page. On this page, the user will have to type in the name of the track that they want to delete in order for the "delete" button to be enabled. I achieved this functionality with, yet again, react hooks. Since setting state in react is asynchronous and `.then()` does not work in functional components, I utilized `useEffect` to watch for changes in the input form.

```javascript
 
  useEffect(() => {
    checkMatching();
  }, [inputText]);
  
  
  const inputChanged = () => {
    return e => {
      setInputText(e.currentTarget.value);
    }
  }
  
  const checkMatching = () => {
    if (inputText === title) {
      setMatching(true);
    } else {
      setMatching(false);
    }
  }
 
```

