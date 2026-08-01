import { useEffect, useRef, useState } from "react";

import Scrapbook from "./components/Scrapbook/Scrapbook";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import Feedback from "./components/Feedback/Feedback";
import FunnyChallenge from "./components/FunnyChallenge/FunnyChallenge";

import pianoMusic from "./assets/music/p5.mp3";


// ============================================================
// ROUTES
// ============================================================

const ROUTES = {
  challenge: "#/challenge",
  intro: "#/scrapbook",
  birthday: "#/birthday",
  gallery: "#/gallery",
};


// ============================================================
// GET SCENE FROM URL
// ============================================================

function getSceneFromHash() {

  const hash = window.location.hash;

  switch (hash) {

    case "#/scrapbook":
      return "intro";

    case "#/birthday":
      return "birthday";

    case "#/gallery":
      return "gallery";

    case "#/challenge":
    default:
      return "challenge";

  }

}


// ============================================================
// APP
// ============================================================

function App() {


  // ==========================================================
  // INITIAL SCENE
  // ==========================================================

  const [scene, setScene] = useState(() => {

    return getSceneFromHash();

  });


  // ==========================================================
  // ONE AUDIO OBJECT FOR ENTIRE APP
  // ==========================================================

  const audioRef = useRef(
    new Audio(pianoMusic)
  );


  // ==========================================================
  // KEEP TRACK OF BROWSER BACK/FORWARD
  // ==========================================================

  const isBrowserNavigation = useRef(false);


  // ==========================================================
  // INITIALIZE URL
  // ==========================================================

  useEffect(() => {

    if (!window.location.hash) {

      window.history.replaceState(
        { scene: "challenge" },
        "",
        ROUTES.challenge
      );

    }

  }, []);


  // ==========================================================
  // HANDLE BROWSER BACK / FORWARD
  // ==========================================================

  useEffect(() => {

    const handleHashChange = () => {

      const nextScene = getSceneFromHash();


      // Tell scene effect this came from browser navigation

      isBrowserNavigation.current = true;


      setScene(nextScene);

    };


    window.addEventListener(
      "hashchange",
      handleHashChange
    );


    return () => {

      window.removeEventListener(
        "hashchange",
        handleHashChange
      );

    };

  }, []);


  // ==========================================================
  // NAVIGATION FUNCTION
  // ==========================================================

  const navigateTo = (nextScene) => {


    // Prevent unnecessary navigation

    if (nextScene === scene) {
      return;
    }


    const nextRoute = ROUTES[nextScene];


    if (!nextRoute) {
      return;
    }


    // Browser navigation is NOT back/forward

    isBrowserNavigation.current = false;


    // Add new browser history entry

    window.history.pushState(
      { scene: nextScene },
      "",
      nextRoute
    );


    // Update React scene

    setScene(nextScene);

  };


  // ==========================================================
  // STOP MUSIC WHEN LEAVING BIRTHDAY
  // ==========================================================

  useEffect(() => {

    if (scene !== "birthday") {

      if (audioRef.current) {

        audioRef.current.pause();

        audioRef.current.currentTime = 0;

      }

    }

  }, [scene]);


  // ==========================================================
  // ENVELOPE OPEN
  //
  // SCRAPBOOK -> BIRTHDAY
  // ==========================================================

  const handleEnvelopeOpen = () => {

    if (!audioRef.current) {
      return;
    }


    // Start piano music

    audioRef.current.src = pianoMusic;

    audioRef.current.loop = true;

    audioRef.current.volume = 0.5;


    audioRef.current
      .play()
      .catch((err) => {

        console.log(
          "Audio play error:",
          err
        );

      });


    // Go to birthday

    navigateTo("birthday");

  };


  // ==========================================================
  // BIRTHDAY -> GALLERY
  // ==========================================================

  const handleContinue = () => {


    // Stop birthday piano

    if (audioRef.current) {

      audioRef.current.pause();

      audioRef.current.currentTime = 0;

    }


    navigateTo("gallery");

  };


  // ==========================================================
  // CHALLENGE -> SCRAPBOOK
  // ==========================================================

  const handleChallengeComplete = () => {

    navigateTo("intro");

  };


  // ==========================================================
  // RENDER
  // ==========================================================

  return (

    <>


      {/* =====================================================
          FUNNY CHALLENGE
      ===================================================== */}

      {scene === "challenge" && (

        <FunnyChallenge

          onComplete={
            handleChallengeComplete
          }

        />

      )}


      {/* =====================================================
          SCRAPBOOK
      ===================================================== */}

      {scene === "intro" && (

        <Scrapbook

          onComplete={
            handleEnvelopeOpen
          }

        />

      )}


      {/* =====================================================
          BIRTHDAY LETTER
      ===================================================== */}

      {scene === "birthday" && (

        <Home

          onContinue={
            handleContinue
          }

        />

      )}


      {/* =====================================================
          GALLERY
      ===================================================== */}

      {scene === "gallery" && (

        <Gallery

          audioRef={
            audioRef
          }

        />

      )}


      {/* =====================================================
          FEEDBACK
      ===================================================== */}

      {/*

      {scene === "feedback" && (

        <Feedback />

      )}

      */}


    </>

  );

}


export default App;