import AppHero from "./hero";
import AppSearching from "./searching";
import AppLuxury from "./luxury";
import AppDiscover from "./discover";
import AppLoan from "./loan";
import AppExplore from "./explore";
import AppWork from "./work";
import AppTestimonials from "./testimonials";
function Home() {
    return (
      <div className="App">
      <main>
      <AppHero/>
      <AppSearching/>
      <AppLuxury/>
      <AppDiscover/>
      <AppLoan/>
      <AppExplore/>
      <AppWork/>
      <AppTestimonials/>
      </main>
      </div>
    );
  }
  
  export default Home;