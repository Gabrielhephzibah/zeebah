<template>
	<div id="details">
		<div class="row">
			<div class="col-md-3 col-lg-2 bg-dark h-400" style="height:140vh; margin-left:-5px;">
			  <!-- <div class="side"> -->
			 	
			 		<div class="home mt-5">
          			<h6 class="padding-top:12px; "style="font-size:20px; font-weight:bold; font-family:Lato;">Bookstore</h6>
        			</div>

        			<div class="add mt-5 ml-4">
          			<h6 class="addbook" style="color:#ffff; font-weight:bold; font-size:20px; font-family:Lato;">Add Book</h6>
          
        </div>

			 		
			 	
				
			<!-- </div>  
				 -->
			
		</div>









				<!-- <div class="col-2">
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
			</div> < -->

			<div class="col-10"style="margin-left:-4px;">
				<div class="down">
					<div class="action">
						 <img class="img1" src="../assets/edit2.png" width="40px;"> 
						 <img class="img1 ml-3" src="../assets/delete.png">
						
					</div>

					<div class="step2" v-if="book">
						<div class="image">
						<img  style="margin-left:-121px; height:435px;" :src="book.image">

						</div> 
						<div class="describe">
							<div class="stand">
							<h3 class="title ">{{ book.title }}</h3>
							<h6 class="sub mt-3">{{ book.authors }}</h6>
							<h6 class="year mt-3">{{ book.year }}</h6>
							<h6 class="year mt-3">{{ book.price }}</h6>
							</div>
							<div class="star mt-2">
								<i class="fa fa-star"></i>
								<i class="fa fa-star ml-3"></i>
								<i class="fa fa-star ml-3"></i>
								<i class="fa fa-star ml-3"></i>
							</div>
							<hr>
								<div class="about">
									<h5 class="explain">{{ book.desc }}</h5>
									
								</div>
								<div class="download">
									<button class="button1">Download</button>
									
								</div>



								
							</div>




							
						</div>


						
					</div>

					
				</div>


				
			</div>


		</div>






		
	</div>
	
</template>


<style scoped>

hr{
	background-color:  #162D5A;
	width: 80px;
	height: 4px;
	margin-left: 38px;
	margin-top: 30px;


}

/*.image{
	margin-left: -121px;
}
*/

/*.home {
	height :45px;
	color : black;
	background-color: #151B54;
	width: 100%;
	font-size: 12px;
	border-left: 8px solid #53AB96;
	margin-left: 15px; 
}*/
/*.side{
 	background: #14150E;
    border: 1px solid #423F5A;
    box-shadow: 0px 2px 10px ;
    border-radius: 0px;
    width: 75%;
    height: 120vh;
   

 }
*/
/*.side-nav {
	background: #14150E;
    border: 1px solid #423F5A;
    box-shadow: 0px 2px 10px ;
    border-radius: 0px;
    width: 100%;
    height: 80vh;
   
}*/
/*.home {
	height :35px;
	color : #ff1d8e;
	background-color: #151B54;
	width: 100%;
	font-size: 12px;
	border-left: 2px solid #ff1d8e; 
}*/

/*.side-bar {
	width:100px;
	height: 100vh;
	/*background-color: #423F5A;*/


.home{
	background: #fff;

}


	
.down{
	background-color: #FCFBFC ;
	width: 100%;
	height: 140vh;

}

.action{
	float: right;
	margin-right: 50px;
	margin-top: 40px;
}

.image{
	padding-top: 120px;
	margin-left:180px;
	float: left;

}

.describe{
	padding-top: 180px;
	margin-left:400px;
	text-align: left;
}

.title{
	font-family: Lato;
font-style: normal;
font-weight: 600;
font-size: 35px;
line-height: 48px;
/* identical to box height */


color: #162D5A;

}

.sub{
	font-family: Lato;
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 34px;
/* identical to box height */


color: #162D5A;
}

.year{
	font-family: Lato;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
/* identical to box height */


color: #162D5A;


}

.fa{
	margin-top: 10px;
	font-size: 22px;
	color: #F6CC25;
}

.explain{
	font-family: Lato;
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 48px;

color: #162D5A;

}
.about{
	width: 80%;
	margin-left: 40px;
}
.download{
	float: right;
	margin-right: 70px;
	margin-top: 50px;
}

.button1{
	background: #53AB96;
border: 1px #000000;
width: 180px;
height: 50px;
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 48px;
/* identical to box height */


color: #FFFFFF;

}


	
</style>


<script>
	export default{
    name:'single',
    props: ['id'],
    data() {
      return{
        apiResponse:{},
        book: null,
        error:{}

      }
    },

 
    components:{},
    mounted() {
    	// console.log(this.$route.params)
      let id = this.$route.params.id
      var proxyurl = "https://cors-anywhere.herokuapp.com/"
      var url = ('https://api.itbook.store/1.0/books/'+id)
      this.$http.get(proxyurl + url)
      .then(response =>{
      	console.log(response.body)
          this.book = response.body
      })
    }
  };



</script>