import React from 'react';
import TitleText from '../title-text/TitleText'
import QuoteBox from '../quote-box/QuoteBox'
import Buttons from '../buttons/Buttons'
import $ from 'jquery';


class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      quotesData : [ {speaker: "Abraham Maslow", quote: "If the only tool you have is a hammer, you tend to see every problem as a nail.", image: "https://upload.wikimedia.org/wikipedia/en/e/e0/Abraham_Maslow.jpg"},
  {speaker: "William James", quote: "Everybody should do two things each day that he hates to do, just for practice.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/William_James_b1842c.jpg/330px-William_James_b1842c.jpg"}, 
  {speaker: "Carl Rogers", quote: "When I look at the world I'm pessimistic, but when I look at people I am optimistic.", image: "https://upload.wikimedia.org/wikipedia/en/3/36/Carlrogers.jpg"},
  {speaker: "Carl Jung", quote: "Everything that irritates us about others can lead us to an understanding about ourselves.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/CGJung.jpg/440px-CGJung.jpg"}, 
  {speaker: "Sigmund Freud", quote: "Being entirely honest with oneself is a good exercise", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/440px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg"},
  {speaker: "Mary Ainsworth", quote: "In hatred as in love, we grow like the things we brood upon. What we loathe, we graft into our very soul.", image: "http://www.feministvoices.com/assets/Women-Past/Ainsworth/Mary-Ainsworth-255x300.jpg"},
  {speaker: "B.F. Skinner", quote: "A failure is not always a mistake, it is simply the best one can do under the circumstances. The real mistake is to stop trying.", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/B.F._Skinner_at_Harvard_circa_1950.jpg/440px-B.F._Skinner_at_Harvard_circa_1950.jpg"},
  {speaker: "Albert Bandura", quote: "People's beliefs about their abilities have a profound effect on those abilities.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Albert_Bandura_Psychologist.jpg/440px-Albert_Bandura_Psychologist.jpg"}, 
  {speaker: "Gordon Alport", quote: "So many tangles in life are ultimately hopeless that we have no appropriate sword other than laughter.", image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Gordon_Allport.gif"}, 
  {speaker: "Anna Freud", quote: "I always thought about looking outside myself for strength and confidence but it comes from within. It is there all the time.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Anna_Freud_1957.jpg/440px-Anna_Freud_1957.jpg"}, 
  {speaker: "Melanie Klein", quote: "The highly ambitious person, in spite of all his successes, always remains dissatisfied, in the same way as a greedy baby in never satisfied.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Melanie_Klein_1952.jpg/440px-Melanie_Klein_1952.jpg"}, 
  {speaker: "Ellen J. Langer", quote: "It is not primarily our physical selves that limit us, but rather our mindset about our physical limits.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ellen_Langer.jpg/440px-Ellen_Langer.jpg"}, 
  {speaker: "Jordan Peterson", quote: "Don't compare yourself with other people. Compare yourself with who you were yesterday.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Jordan_Peterson_June_2018.jpg/330px-Jordan_Peterson_June_2018.jpg"  },
  {speaker: "Erik Erikson", quote: "The more you know yourself, the more patience you have for what you see in others", image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Erik_Erikson.png"},
  {speaker: "Ablert Ellis", quote: "By not caring too much about what people think, I'm able to think for myself and propagate ideas which are very often unpopular. And I succeed.", image: "http://albertellis.org/wp-content/uploads/2018/02/Albert-Ellis-Color.jpg"}, 
  {speaker: "Paul Bloom", quote: "Love is a gross exaggeration of the difference between one person and everybody else.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvuyZEIiaeN-8TFth8s9qoP93nykObH5gMWAGX384VWuGhPDOT"}, 
  {speaker: "Joyce Brothers", quote: "A strong, positive self-image is the best possible preparation for success.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Joyce_Brothers_NYWTS.jpg/330px-Joyce_Brothers_NYWTS.jpg"},
  {speaker: "Ivan Pavlov", quote: "Don't become a mere recorder of facts, but try to penetrate the mystery of their origin.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ivan_Pavlov_NLM3.jpg/330px-Ivan_Pavlov_NLM3.jpg"},
  {speaker: "Carol Gilligan", quote: "Speaking and listening are a form of psychic breathing.", image: "https://its.law.nyu.edu/facultyprofiles/photo_vertical/index.cfm?personid=19946"},
  {speaker: "Daniel Kahneman", quote: "Our comforting conviction that the world makes sense rests on a secure foundation: our almost unlimited ability to ignore our ignorance", image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Daniel_KAHNEMAN.jpg" },
  {speaker: "Eric Fromm", quote: "Love is the only sane and satisfactory answer to the problem of human existence", image: "https://images.gr-assets.com/authors/1221544425p5/8788.jpg"},
   {speaker: "Warren Bennis", quote: "Becoming a leader is synonymous with becoming yourself. It is precisely that simple, and also that difficult.", image: "https://upload.wikimedia.org/wikipedia/en/e/e7/Warren_Bennis.jpg" }, 
  {speaker: "Alfred Adler", quote: "The chief danger in life is that you may take too many precautions", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Alfred_Adler_%281870-1937%29_Austrian_psychiatrist.jpg/330px-Alfred_Adler_%281870-1937%29_Austrian_psychiatrist.jpg"},
  {speaker: "Rollo May", quote: "Everyone has a need for significance; and if we can't make that possible, or even probable, in our society, then it will be obtained in destructive ways.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Rollo_May_USD_Alcal%C3%A1_1977.jpg/330px-Rollo_May_USD_Alcal%C3%A1_1977.jpg"},
  {speaker: "Alice Miller", quote: "Wherever I look, I see signs of the commandment to honor one's parents and nowhere of a commandment that calls for the respect of a child.", image: "http://totallyhistory.com/wp-content/uploads/2014/01/Alice-Miller1.jpg"}],
        quotesDataCopy : []
    }
    this.randomQuote = this.randomQuote.bind(this);
  
  }
  
  randomQuote(){
    let length = this.state.quotesData.length;
   
    if (length === 1){
      this.setState(prevState => {return {quotesData: [...prevState.quotesDataCopy]}})
      length = this.state.quotesData.length;
    }
   
    let index = Math.floor(Math.random() * length);
    let data = this.state.quotesData[index]
    
    this.setState( prevState => {
      let tempQuotesData = prevState.quotesData;
      tempQuotesData.splice(index, 1)
      return{
        quotesData: tempQuotesData
      } 
    })
 
    /*add a transition to the html changes*/
     $("#text").animate( {opacity: 0}, 300, 
     function(){
     $('#text').animate({opacity: 1}, 300)
     $('#text').html("<p><i className='fas fa-quote-left quote-icon'></i> " +
  data.quote +  " <i className='fas fa-quote-right quote-icon'></i></p>");
    })

    $("#author").animate( {opacity: 0}, 300, 
     function(){
     $('#author').animate({opacity: 1}, 300)
     $('#author').html("&mdash; " + data.speaker );
    })

    $("#photo").animate( {opacity: 0}, 300, 
     function(){
     $('#photo').animate({opacity: 1}, 300)
     $('#photo').attr("src", data.image);
    })

    $('#tweet-quote').attr("href", 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(
  "'" + data.quote + "'  - " + data.speaker))
  }
  
  /* create a copy of the data to recover after modifying the data in order to avoid repeat quotes*/
  componentDidMount(){
    this.setState(prevState => {return {quotesDataCopy: [...prevState.quotesData]}})
    this.randomQuote();
  }
  
  render(){
    return(
      <div>
        <TitleText/>
        <QuoteBox/>
        <Buttons generateQuote = {this.randomQuote}/>
      </div>
    )
  }
}


export default App;
