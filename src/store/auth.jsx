import { createContext,useContext,useEffect, useState } from "react";
export const AuthContext=createContext();
export const AuthProvider=({children})=>{
  const [itemDetails, setItemDetails] = useState({});
   const[trendTrailer,setTrailer]=useState([]);
   const[popularMovie,setPopular]=useState([]);
   const[topMovie,setTop]=useState([]);
   const[biographyMovie,setBiography]=useState([]);
   const[actionMovie,setAction]=useState([]);
   const[horrorMovie,setHorror]=useState([]);
   const[boxOffice,setBoxoffice]=useState([]);
   const[movieGenre,setGenre]=useState("thriller");
   const[movieGenreItems,setGenreItems]=useState([]);
   useEffect(()=>{  
      const urltrailer = 'https://moviesverse1.p.rapidapi.com/get-trending-trailers';
      const urlpopular = 'https://moviesverse1.p.rapidapi.com/most-popular-movies';
      const urltophundred='https://moviesverse1.p.rapidapi.com/top-250-movies';
      const urlbiography='https://moviesverse1.p.rapidapi.com/get-by-genre?genre=biography';
      const urlaction='https://moviesverse1.p.rapidapi.com/get-by-genre?genre=action';
      const urlhorror='https://moviesverse1.p.rapidapi.com/get-by-genre?genre=horror';
      const urlboxoffice='https://moviesverse1.p.rapidapi.com/top-box-office';
      const urlgenre=`https://moviesverse1.p.rapidapi.com/get-by-genre?genre=${movieGenre}`;
      const getTrailer=async()=>{    
  try {
    const response = await fetch(urltrailer,
     { method: 'GET',
      headers: {
         'X-RapidAPI-Key': 'fa6ad6c7acmshff0ce42a4cc0087p11b808jsnecfa297821ef',
         'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
      }
   }
   );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setTrailer(data.trailers);
  } catch (error) {
    console.log(error);
  }
      };
     
      const getPopular=async()=>{    
  try {
    const response = await fetch(urlpopular, {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': 'fa6ad6c7acmshff0ce42a4cc0087p11b808jsnecfa297821ef',
         'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
      }
   });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setPopular(data.movies);
  } catch (error) {
    console.log(error);
  }
      };
      const getTop=async()=>{    
         try {
           const response = await fetch(urltophundred, {
             method: 'GET',
             headers: {
                'X-RapidAPI-Key': 'fa6ad6c7acmshff0ce42a4cc0087p11b808jsnecfa297821ef',
                'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
             }
          });
           if (!response.ok) {
             throw new Error("Network response was not ok");
           }
           const data = await response.json();
           setTop(data.movies);
         } catch (error) {
           console.log(error);
         }
             };
      const getBiography=async()=>{    
  try {
    const response = await fetch(urlbiography, {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': 'fa6ad6c7acmshff0ce42a4cc0087p11b808jsnecfa297821ef',
         'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
      }
   });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setBiography(data.movies);
  } catch (error) {
    console.log(error);
  }
      };
      const getAction=async()=>{    
        try {
          const response = await fetch(urlaction, {
            method: 'GET',
            headers: {
               'X-RapidAPI-Key': 'fa6ad6c7acmshff0ce42a4cc0087p11b808jsnecfa297821ef',
               'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
            }
         });
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setAction(data.movies);
        } catch (error) {
          console.log(error);
        }
            };
      const getHorror=async()=>{    
              try {
                const response = await fetch(urlhorror, {
                  method: 'GET',
                  headers: {
                     'X-RapidAPI-Key': 'fa6ad6c7acmshff0ce42a4cc0087p11b808jsnecfa297821ef',
                     'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
                  }
               });
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setHorror(data.movies);
              } catch (error) {
                console.log(error);
              }
                  };
      const getGenre=async()=>{    
                    try {
                      const response = await fetch(urlgenre, {
                        method: 'GET',
                        headers: {
                           'X-RapidAPI-Key': 'fa6ad6c7acmshff0ce42a4cc0087p11b808jsnecfa297821ef',
                           'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
                        }
                     });
                      if (!response.ok) {
                        throw new Error("Network response was not ok");
                      }
                      const data = await response.json();
                      setGenreItems(data.movies);
                    } catch (error) {
                      console.log(error);
                    }
                        };            
      const getBoxoffice=async()=>{    
         try {
           const response = await fetch(urlboxoffice, {
             method: 'GET',
             headers: {
                'X-RapidAPI-Key': 'fa6ad6c7acmshff0ce42a4cc0087p11b808jsnecfa297821ef',
                'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
             }
          });
           if (!response.ok) {
             throw new Error("Network response was not ok");
           }
           const data = await response.json();
           setBoxoffice(data.movies);
         } catch (error) {
           console.log(error);
         }
             };
  getGenre();
  getBoxoffice();
  getBiography();
  getAction();
  getHorror();
  getTop();
  getPopular();
  getTrailer();
    },[movieGenre]);
return(
   <AuthContext.Provider value={{itemDetails,setItemDetails,trendTrailer,popularMovie,topMovie,biographyMovie,actionMovie,horrorMovie,boxOffice,setGenre,movieGenre,movieGenreItems}}>
      {children}
   </AuthContext.Provider>
)
}
export const useAuth=()=>{
   const mainContext=useContext(AuthContext);
   return (
      mainContext
   )
}