<template>

	<div class="row">
		<div class="col-md-3 col-lg-2 bg-dark h-400" style="height:340vh;">
			  <div class="side">
			 	
			 		<div class="home mt-5">
          			<h6 class="padding-top:12px; "style="font-size:20px; font-weight:bold; font-family:Lato;">Bookstore</h6>
        			</div>

        			<div class="add mt-5 ml-4">
          			<h6 class="addbook" style="color:#ffff; font-weight:bold; font-size:20px; font-family:Lato;">Add Book</h6>
          
        </div>

			 		
			 	
				
			</div>  
				
			
		</div>



		<div class="col-md-9">
			<div class="row justify-content-center" id="work">
				
			
			<div class="col-md-4 mb-4" v-for="(book, key) in bookstore" :key="key">
				<div class="card" style="border:none;">
					<div class="card-img-top">
						<img :src="book.image">
					</div>
					<div class="card-body">
						<h6 class="card-title">{{formatTitle(book.title)}}</h6>
						<p class="card-text">{{book.price}}</p>
						<div class="star">
                		<i class="fa fa-star"></i>
                		<i class="fa fa-star ml-3"></i>
                		<i class="fa fa-star ml-3"></i>
                		<i class="fa fa-star ml-3"></i>
              			</div>
              			<div class="mybutton">
		                <router-link :to="{name: 'single', params:{id: book.isbn13}
	      				}" >
		                <button class="btn1">view details</button>
		              </router-link>
              </div>

					</div>

				</div>
			</div>
			<!-- <br><br> -->


				<!-- <div class="col-md-4">
					<div class="box1">
						<img src="">
						
					</div>
					
					
				</div>


				<div class="col-md-">
					<div class="box1">
						
					</div>
					
					
				</div> -->
			</div>
			
			<!-- <div style="margin-top:100px;margin-left:50px;" class="card-deck">
			  <div class="card">
			    <img src="../assets/spark.png" class="card-img-top" alt="...">
			    <div class="card-body">
			      <h5 class="card-title">Spark</h5>
			      <h5 class="card-text">JUdy bright</h5>
			      <div class="star">
                <i class="fa fa-star"></i>
                <i class="fa fa-star ml-3"></i>
                <i class="fa fa-star ml-3"></i>
                <i class="fa fa-star ml-3"></i>
              </div>

				<router-link :to="{name: 'details'}" >
                <button class="btn1">view details</button>
              </router-link>
			    </div>
			  </div> 
			  <div class="card">...
			    <img  src="../assets/spark.png" class="card-img-top" alt="...">
			    <div class="card-body">
			      <h5 class="card-title">Spark</h5>
			      <h5 class="card-text">JUdy bright</h5>
			      <div class="star">
                <i class="fa fa-star"></i>
                <i class="fa fa-star ml-3"></i>
                <i class="fa fa-star ml-3"></i>
                <i class="fa fa-star ml-3"></i>
              </div>
			      <router-link :to="{name: 'details'}" >
                <button class="btn1">view details</button>
              </router-link>
			    </div>
			  </div>
			  <div class="card">
			    <img src="../assets/spark.png" class="card-img-top" alt="...">
			    <div class="card-body">
			      <h5 class="card-title">Spark</h5>
			      <h5 class="card-text"> JUdy bright</h5>
			    <div class="star">
                <i class="fa fa-star"></i>
                <i class="fa fa-star ml-3"></i>
                <i class="fa fa-star ml-3"></i>
                <i class="fa fa-star ml-3"></i>
              </div>
              <router-link :to="{name: 'details'}" >
                <button class="btn1">view details</button>
              </router-link>
			     
			    </div>
			  </div>
			</div> 
 -->



		</div>
	</div>

	
</template>

<style>
/*.sidebar{
	height: 200vh;
	border: 1px solid black;
	width: 60%;
	background-color:#14150E; 

}*/

.home{
  background: #fff;
  height :45px;
  color : #14150E; 

  background-color: #ffff;
  width: 100%;
  font-size: 12px;
  border-left: 8px solid #53AB96;
  margin-left: 15px; 
  margin-top: 20px;
  padding-top: 12px;

}

.card-title{
  font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 36px;
/* identical to box height */


color: #162D5A;


}
.card-text {
  font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 29px;
/* identical to box height */


color: #374D77;


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

/*.box1{
  height: 300px;
  width: 250px;
  border: 1px solid #000000;
}*/

#work{
	
margin-top: 100px;
margin-left: 100px;
	
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

    methods: {
    	formatTitle: function(title){
    		if (title.length <= 18) {
    			return title;
    		}
    		return title.substr(0, title.lastIndexOf(' ', 18))+'...'
    	}
    }


    };






</script>