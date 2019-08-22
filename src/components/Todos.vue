<!-- <template> 
	 <div>
		<h3>Todo</h3>
	</div> 
	<template> -->
    <!-- <div class="books">
        <div class="header">
            <p class="small">FIND A TRUE COLLECTION OF BOOKS</p>
            <p class="large">Discover the largest book
            <br>collection in the world.</p>
            <button>See Collection</button>
        </div>

        <div class="dark" id="v-carousel" type="x/template">
            <div class="card-carousel-wrapper">
              <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
              <div class="card-carousel">
                <div class="card-carousel--overflow-container">
                  <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
                    <div class="card-carousel--card" v-for="(item, key) in items" :key="key">
                      <img :src="item.image" alt="">
                      <div class="card-carousel--card--footer">
                        <p class="bookname">{{ item.title }}</p>
                        <p class="author"><span>b</span>{{ item.price }}</p>
                        <p class="intro">{{ item.subtitle }}</p>
                        <router-link :to="{name: 'singlebook'}" >
                        <p class="view">VIEW DETAILS</p>
                        </router-link>                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 220,
      items: []
    };
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor  -1  (this.items.length - this.windowSize)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    }
  },
  created: function()
      {
          this.fetchItems();
      },
  methods: {
    fetchItems(){
          {
              this.$http.get('https://api.itbook.store/1.0/new').then((response) => {
                console.log(response.body.books);
                  this.items = response.body.books;
              });
          }
    },
      moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    }
  }
};
</script>

<style scoped>
    .books {
        position: absolute;
        margin-top: 150px;
        font-family: Roboto;
        font-style: normal;
    }
    .header {
        margin-left: 40px;
    }
    .small {
        font-weight: normal;
        font-size: 16px;
        letter-spacing: 0.07em;
        color: #162D5A;
    }
    .large {
        margin-top: 0px;
        font-weight: bold;
        font-size: 80px;
        color: #162D5A;
    }
    button {
        width: 234px;
        height: 70px;
        background: #FE6E4F;
        border-radius: 6px;
        font-size: 20px;
        color: #FFFFFF;
        border: none;
    }
    .dark {
        width: 1350px;
        height: 650px;
        margin-left: 0px;
        margin-top: 100px;
        background: #F4F3F1;
    }
    .card-carousel-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 40px 0 40px;
      color: #666a73;
      /* width: 1200px;
      height: 600px; */
}
.card-carousel {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  width: 990px;
}
.card-carousel--overflow-container {
  overflow: hidden;
}
.card-carousel--nav__left, .card-carousel--nav__right {
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 10px;
  box-sizing: border-box;
  border-top: 2px solid #42b883;
  border-right: 2px solid #42b883;
  cursor: pointer;
  margin: 0 10px;
  transition: transform 150ms linear;
}
.card-carousel--nav__left[disabled], .card-carousel--nav__right[disabled] {
  opacity: 0.2;
  border-color: black;
}
.card-carousel--nav__left {
  transform: rotate(-135deg);
}
.card-carousel--nav__left:active {
  transform: rotate(-135deg) scale(0.9);
}
.card-carousel--nav__right {
  transform: rotate(45deg);
}
.card-carousel--nav__right:active {
  transform: rotate(45deg) scale(0.9);
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
}
.card-carousel-cards .card-carousel--card {
  margin: 0 20px;
  width: 300px;
  height: 500px;
  background: #DDE6E8;
  border: 1px solid #8A8F83;
  box-sizing: border-box;
  cursor: pointer;
  margin-bottom: 2px;
}
.card-carousel-cards .card-carousel--card img {
  width: 250px;
  height: 300px;
  border-top: 4px;
  margin: 20px;
  transition: opacity 150ms linear;
  user-select: none;
}
.card-carousel-cards .card-carousel--card img:hover {
  opacity: 0.5;
}
.card-carousel-cards .card-carousel--card--footer {
  border-top: 0;
  padding: 7px 15px;
}
/* .card-carousel-cards .card-carousel--card--footer p {
  padding: 3px 0;
  margin: 0;
  margin-bottom: 2px;
  font-size: 19px;
  font-weight: 500;
  color: #2c3e50;
} */
.bookname {
  font-weight: 500;
font-size: 23px;
color: #162D5A;
}
.author {
  font-style: italic;
  font-weight: normal;
  font-size: 20px;
  color: #9DB1BF;
}
.intro {
  font-style: normal;
  font-weight: 300;
  font-size: 19px;
  color: #162D5A;
}
.view {
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  color: #FE6E4F;
}

</style>
	
<!-- </template>

<script >
	export default{
		name:"todos"

	};
</script>







<style>


</style> -->


<template>
  <div id="below">

    <div class="row">
        <div class="col-md-3">
          <div class="side">
            <nav class="side-nav pt-5">
              <div class="home pt-2">
          <h6 class="mt-1 "style="font-size:20px; font-weight:bold; font-family:Lato">Bookstore</h6>
        </div>

        <div class="add mt-5 ml-4">
          <h6 class="addbook" style="color:#ffff; font-weight:bold; font-size:20px; font-family:Lato;">Add Book</h6>
          
        </div>

        
        

             
            </nav>      
          </div>
      </div> <!-- 4 col-2 -->

      <div class="col-md-9">
        <div class="row">
        <div class="col-md-4" v-for="(book, key) in bookstore" :key="key">
          <div>
            <div class="img-top">
              <img class="img4" :src="book.image"> 
              
            </div>
            
            <div class="footer mt-4">
              <div class="text">
              <h6 class="blood">{{ book.title }}</h6>
              <h5 class="Lowe"> {{ book.price }}</h5>
              </div>
              <div class="star">
                <i class="fa fa-star"></i>
                <i class="fa fa-star ml-3"></i>
                <i class="fa fa-star ml-3"></i>
                <i class="fa fa-star ml-3"></i>
              </div>
              <div class="mybutton">
                <router-link :to="{name: 'details'}" >
                <button class="btn1">view details</button>
              </router-link>
                
              </div>

            </div>

            
            
          </div>
           <div class="box1" id="box2">

            <div class="img-top">
              <img class="img4" src="../assets/spark.png"> 
              
            </div>
             <div class="img">
              <img class="img2" src="../assets/delete.png" width="7%">
              
            </div> 
            <div class="footer mt-4">
              <div class="text">
              <h6 class="blood">Spark</h6>
              <h5 class="Lowe"> by Judy Wayne</h5>
              </div>
              <div class="star">
                <i class="fa fa-star"></i>
                <i class="fa fa-star ml-3"></i>
                <i class="fa fa-star ml-3"></i>
                <i class="fa fa-star ml-3"></i>
              </div>
              <div class="mybutton">
                <router-link :to="{name: 'details'}" >
                <button class="btn1">view details</button>
              </router-link>
                
              </div>

            </div>













            
            
          </div>
          <div class="box1" id="box3">

            <div class="img-top">
              <img class="img4" src="../assets/time.png"> 
              
            </div>
             <div class="img">
              <img class="img2" src="../assets/delete.png" width="7%">
              
            </div>
            <div class="footer mt-4">
              <div class="text">
              <h6 class="blood">A time to stand</h6>
              <h5 class="Lowe">by Robert Whitlow</h5>
              </div>
              <div class="star">
                <i class="fa fa-star"></i>
                <i class="fa fa-star ml-3"></i>
                <i class="fa fa-star ml-3"></i>
                <i class="fa fa-star ml-3"></i>
              </div>
              <div class="mybutton">
                <router-link :to="{name: 'details'}" >
                <button class="btn1">view details</button>
              </router-link>
                
              </div>

            </div>


















            
            
          </div> -->
          
        </div>
        

      </div>




      </div> 4 col-10
  </div>
</div>






  
</template>


<style scoped>
.home {
  height :45px;
  color : black;
  background-color: #151B54;
  width: 100%;
  font-size: 12px;
  border-left: 8px solid #53AB96;
  margin-left: 15px; 
}
.side{
  background: #14150E;
    /*border: 1px solid #423F5A;
    box-shadow: 0px 2px 10px ;*/
    border-radius: 0px;
    width: 75%;
    height: 100vh;
   

 }

.side-nav {
  background: #14150E;
   /* border: 1px solid #423F5A;
    box-shadow: 0px 2px 10px ;*/
    border-radius: 0px;
    width: 100%;
    height: 80vh;
   
}
/*.home {
  height :35px;
  color : #ff1d8e;
  background-color: #151B54;
  width: 100%;
  font-size: 12px;
  border-left: 2px solid #ff1d8e; 
}*/

.side-bar {
  width:100px;
  height: 100vh;
  /*background-color: #423F5A;*/

}
.home{
  background: #fff;

}

.box1{
  height: 300px;
  width: 250px;
  border: 1px solid #000000;
}

.box{
  margin-top: 100px;
  display: inline-block;
  margin-left: 30px;
}

#box2{
  margin-left: 110px;
}

#box3{
  margin-left: 110px;
}
.img1{
  float: left;
  margin-right: 3px;
  margin-top:3px;
}
.img2{
  float: right;
  margin-right: 3px;
  margin-top:3px;
  background: #ffff;

}

.img4{
  height: 300px;
  width: 250px;

}

.blood{
  font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 36px;
/* identical to box height */


color: #162D5A;


}
.Lowe{
  font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 29px;
/* identical to box height */


color: #374D77;


}

.footer{
  text-align: left;
  margin-left: 20px;
}

.fa{
  margin-top: 10px;
  font-size: 22px;
  color: #F6CC25;
}

.btn1{
  margin-top: 10px;
  border-radius: 9px;
  background: #162D5A;
  opacity: 0.8;
  color: #ffff;
  width: 120px;
  height: 40px;
  font-family: Lato;
font-style: normal;
font-weight: 800;
font-size: 15px;
line-height: 18px;
/* identical to box height */


color: #FFFFFF;

}


</style>



<script>
  export default{
    name:'home',
    data() {
      return{
        apiResponse:{},
        bookstore: [],
        error:{}


      }
    },

    components:{},
    mounted() {
      // let config = {'access-control-allow-origin':'*'}
      var proxyurl = "https://cors-anywhere.herokuapp.com/"
      var url = "https://api.itbook.store/1.0/new"
      this.$http.get(proxyurl + url)
      .then(response =>{
         // console.log(response.body.books)
        this.bookstore = response.body.books
        // console.log(this.bookstore)
      })


      // $.get("", function(data){
      //  console.log(data)
      // })
          
    },


    };




</script>