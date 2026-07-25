import { useState } from "react";
import { motion } from "framer-motion";
import "./FunnyChallenge.css";


export default function FunnyChallenge({ onComplete }) {


  const [reply, setReply] = useState("");

  const [yesScale, setYesScale] = useState(1);


  const [jumpCount, setJumpCount] = useState(0);


  const [success, setSuccess] = useState(false);


  const [noVisible, setNoVisible] = useState(true);



  const [noPos, setNoPos] = useState({

    x:0,

    y:0

  });





  // Freeze particles

  const [particles] = useState(

    Array.from({length:80},()=>({

      left:Math.random()*100,

      delay:Math.random()*8,

      size:2+Math.random()*5,

      duration:5+Math.random()*8

    }))

  );





  const notes=[

    "♪",
    "♫",
    "♩",
    "♬",
    "♪",
    "♫"

  ];





  const random=(min,max)=>{

    return Math.random()*(max-min)+min;

  };





  // NO escaping logic

  const moveNo = () => {



    // Last escape

    if(jumpCount >= 9){



      setNoPos({

        x:random(-300,300),

        y:random(-150,150)

      });



      setJumpCount(prev=>prev+1);



      setTimeout(()=>{


        setNoVisible(false);


        setYesScale(1.3);


        setReply("");



      },500);



      return;


    }





    const screenWidth = window.innerWidth;

    const screenHeight = window.innerHeight;





    const x = random(

      -(screenWidth/2)+100,

      (screenWidth/2)-100

    );





    const y = random(

      -(screenHeight/2)+100,

      (screenHeight/2)-100

    );





    setNoPos({

      x,

      y

    });





    setJumpCount(prev=>prev+1);





    setYesScale(prev=>prev+0.08);





    const replies=[


      "😂 Nice try!",

      "Too slow 😎",

      "Catch me if you can!",

      "I'm too fast 🤭",

      "Almost caught me!",

      "NO is running away 😂"


    ];





    setReply(

      replies[

        Math.floor(

          Math.random()*replies.length

        )

      ]

    );


  };





  const handleYes=()=>{


    setSuccess(true);


    setReply("success");



    setTimeout(()=>{


      onComplete();


    },1800);


  };
    return (

    <div className="challenge-scene">


      {/* Background Glow */}

      <div className="gold-glow"></div>




      {/* Magical Particles */}

      <div className="particles">


        {
          particles.map((p,i)=>(

            <span

              key={i}

              className="particle"

              style={{

                left:`${p.left}%`,

                width:`${p.size}px`,

                height:`${p.size}px`,

                animationDelay:`${p.delay}s`,

                animationDuration:`${p.duration}s`

              }}

            />


          ))
        }


      </div>






      {/* Floating Music Notes */}

      <div className="music-notes">


        {
          notes.map((note,i)=>(


            <motion.span

              key={i}

              className="music-note"


              animate={{

                y:[0,-120],

                opacity:[0,1,0],

                rotate:[0,20,-20]

              }}



              transition={{

                duration:5+i,

                repeat:Infinity,

                delay:i*.8

              }}


            >

              {note}


            </motion.span>


          ))
        }


      </div>







      {/* Main Content */}


      <motion.div


        className="challenge-content"



        initial={{

          opacity:0,

          y:50

        }}



        animate={{

          opacity:1,

          y:0

        }}



        transition={{

          duration:1,

          type:"spring"

        }}



      >






        {/* Crown */}

{/* 
        <motion.div


          className="royal-crown"



          animate={{


            rotate:[-5,5,-5],


            y:[0,-10,0]


          }}



          transition={{


            duration:3,


            repeat:Infinity


          }}


        >

          👑


        </motion.div> */}








        {/* Badge */}

{/* 
        <motion.div


          className="security-badge"



          animate={{


            boxShadow:[


              "0 0 15px rgba(255,215,0,.3)",


              "0 0 35px rgba(255,215,0,.8)",


              "0 0 15px rgba(255,215,0,.3)"


            ]


          }}



          transition={{


            duration:2,


            repeat:Infinity


          }}



        >


          ✨ Birthday Security Check ✨


        </motion.div> */}








        {/* <h1 className="main-title">


          Only Special People


          <br/>


          Can Continue


        </h1> */}








        <h2 className="question">


          Before unlocking your surprise...


          <br/>


          Do you agree that you are


          <br/>


          <span>


             Idiot? 😂❤️


          </span>


        </h2>








        <p className="hint">


          Think carefully...


          <br/>


          There is only one correct answer 😌


        </p>








        {/* Progress */}


        <div className="journey">


          {

            Array.from({length:10}).map((_,i)=>(


              <span


                key={i}


                className={


                  i < jumpCount


                  ?


                  "journey-dot active"


                  :


                  "journey-dot"



                }


              />


            ))

          }


        </div>








        {/* Reply Message */}


        <motion.div


          key={reply}


          className="funny-reply"



          initial={{


            opacity:0,


            scale:.8


          }}



          animate={{


            opacity:1,


            scale:1


          }}



        >


          {reply}


        </motion.div>
                {/* Buttons Area */}

        <div className="answer-zone">



          {/* YES Button */}

          <motion.button


            className="magic-yes"



            animate={{

              scale: yesScale,

              boxShadow:[

                "0 0 20px rgba(255,215,100,.4)",

                "0 0 45px rgba(255,215,100,.9)",

                "0 0 20px rgba(255,215,100,.4)"

              ]

            }}



            transition={{


              boxShadow:{

                duration:2,

                repeat:Infinity

              },


              scale:{

                type:"spring",

                stiffness:200

              }


            }}



            onClick={handleYes}



          >

            YES ❤️


          </motion.button>









          {/* NO Button */}

          {


            noVisible && (



              <motion.div


                className="escape-container"



                animate={{


                  x:noPos.x,


                  y:noPos.y


                }}



                transition={{


                  type:"spring",


                  stiffness:500,


                  damping:20


                }}



              >



                <motion.button



                  className="funny-no"



                  whileHover={{


                    rotate:-10,


                    scale:1.1


                  }}



                  onMouseEnter={moveNo}



                  onTouchStart={moveNo}



                  onClick={moveNo}



                >


                  NO 🙈



                </motion.button>



              </motion.div>



            )


          }



        </div>








        {/* Piano Stage */}



        <motion.div


          className="piano-stage"



          initial={{


            opacity:0,


            y:40


          }}



          animate={{


            opacity:1,


            y:0


          }}



          transition={{


            delay:1


          }}



        >




          <div className="piano-light"></div>






          <div className="mini-piano">



            <div className="black-keys">


              <span></span>

              <span></span>

              <span></span>

              <span></span>

              <span></span>


            </div>





            <div className="white-keys">


              {

                Array.from({length:8}).map((_,i)=>(


                  <span key={i}></span>


                ))

              }


            </div>




          </div>








          <motion.div



            className="piano-caption"



            animate={{


              opacity:[.5,1,.5]


            }}



            transition={{


              duration:3,


              repeat:Infinity


            }}



          >


            🎹 A Little Surprise Awaits...



          </motion.div>




        </motion.div>








        {/* Bottom Decoration */}


        <div className="gold-wave">


          <span></span>

          <span></span>

          <span></span>


        </div>




      </motion.div>
            {/* Success Screen */}

      {
        success && (

          <motion.div


            className="success-screen"



            initial={{

              opacity:0

            }}



            animate={{

              opacity:1

            }}



            transition={{

              duration:.5

            }}



          >




            {/* Confetti */}

            {

              Array.from({length:120}).map((_,i)=>(



                <motion.span


                  key={i}


                  className="celebration-piece"



                  style={{


                    left:`${Math.random()*100}%`


                  }}




                  initial={{


                    y:-100,


                    opacity:1,


                    rotate:0


                  }}



                  animate={{


                    y:window.innerHeight+300,


                    rotate:Math.random()*1000,


                    x:(Math.random()-.5)*500,


                    opacity:0


                  }}




                  transition={{


                    duration:2+Math.random()*2,


                    ease:"easeOut"


                  }}




                />



              ))

            }







            {/* Gift */}



            <motion.div



              className="surprise-gift"



              initial={{


                scale:.3,


                rotate:-20,


                opacity:0


              }}




              animate={{


                scale:1,


                rotate:0,


                opacity:1


              }}




              transition={{


                type:"spring",


                stiffness:200


              }}



            >


              🎁



            </motion.div>







            <motion.h2



              initial={{


                y:40,


                opacity:0


              }}




              animate={{


                y:0,


                opacity:1


              }}




              transition={{


                delay:.5


              }}



            >


              Opening Your Surprise...



            </motion.h2>








            <motion.p



              initial={{


                opacity:0


              }}




              animate={{


                opacity:1


              }}




              transition={{


                delay:1


              }}



            >


              ❤️ Get ready for something special ❤️



            </motion.p>





          </motion.div>


        )

      }





    </div>

  );

}