import { createContext,useContext,useEffect, useState } from "react";
export const AuthContext=createContext();
export const AuthProvider=({children})=>{
  const[curhead,setcurhead]=useState(0);
  const [itemDetails, setItemDetails] = useState({});
  const [newsitemDetails, setNewsItemDetails] = useState({});
   const[trendTrailer,setTrailer]=useState([]);
   const[popularMovie,setPopular]=useState([]);
   const[topMovie,setTop]=useState([]);
   const[biographyMovie,setBiography]=useState([]);
   const[actionMovie,setAction]=useState([]);
   const[horrorMovie,setHorror]=useState([]);
   const[boxOffice,setBoxoffice]=useState([]);
   const[movieGenre,setGenre]=useState("thriller");
   const[movieGenreItems,setGenreItems]=useState([]);
   const [searchItem,setSearch] =useState("");
   const [movieNews,setMovieNews]=useState([]);
   const[celebNews,setCelebNews]=useState([]);
   const[celebrities,setCelebrities]=useState([]);
   const[upcomingItems,setUpcomingItems]=useState([]);
   const[upcoming,setUpcoming]=useState("upcoming-movies");
   useEffect(()=>{ 
      const urltrailer = 'https://moviesverse1.p.rapidapi.com/get-trending-trailers';
      const urlpopular = 'https://moviesverse1.p.rapidapi.com/most-popular-movies';
      const urltophundred='https://moviesverse1.p.rapidapi.com/top-250-movies';
      const urlbiography='https://moviesverse1.p.rapidapi.com/get-by-genre?genre=biography';
      const urlaction='https://moviesverse1.p.rapidapi.com/get-by-genre?genre=action';
      const urlhorror='https://moviesverse1.p.rapidapi.com/get-by-genre?genre=horror';
      const urlboxoffice='https://moviesverse1.p.rapidapi.com/top-box-office';
      const urlgenre=`https://moviesverse1.p.rapidapi.com/get-by-genre?genre=${movieGenre}`;
      const urlmovienews="https://moviesverse1.p.rapidapi.com/get-movie-news";
      const urlcelebnews="https://moviesverse1.p.rapidapi.com/get-celebrities-news";
      const urlcelebrities="https://moviesverse1.p.rapidapi.com/get-most-popular-celebrities";
      const urlupcoming=`https://moviesverse1.p.rapidapi.com/${upcoming}`;
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
      const getMovieNews=async()=>{
        try {
          const response = await fetch(urlmovienews, {
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
          setMovieNews(data.news);
        } catch (error) {
          console.log(error);
        }
           
      }
      const getCelebNews=async()=>{
        try {
          const response = await fetch(urlcelebnews, {
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
          setCelebNews(data.news);
        } catch (error) {
          console.log(error);
        }
           
      }
      const getUpcoming=async()=>{
        try {
          const response = await fetch(urlupcoming, {
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
          setUpcomingItems(data.movies[0].list);
        } catch (error) {
          console.log(error);
        }
           
      }
      const getCelebrity=async()=>{
        try {
          const response = await fetch(urlcelebrities, {
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
          setCelebrities(data.celebrities);
        } catch (error) {
          console.log(error);
        }
           
      }
  getCelebrity();
  getUpcoming();    
  getCelebNews();
  getMovieNews();
  getGenre();
  getBoxoffice();
  getBiography();
  getAction();
  getHorror();
  getTop();
  getPopular();
  getTrailer();
    },[movieGenre,upcoming]);
return(
   <AuthContext.Provider value={{itemDetails,setItemDetails,trendTrailer,popularMovie,topMovie,biographyMovie,actionMovie,horrorMovie,boxOffice,setGenre,movieGenre,movieGenreItems,searchItem,setSearch,movieNews,celebNews,newsitemDetails,setNewsItemDetails,curhead,setcurhead,setUpcoming,upcoming,upcomingItems,celebrities}}>
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