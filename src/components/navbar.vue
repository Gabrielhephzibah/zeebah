<template>
	<div id="upper">

		<div class="top-nav">
				<nav class="nav">
					<div class="logo">
						<h1 class="H">H</h1>
					</div>
					<div class="searching pl-4 mt-3 ml-5">
						<h1 class="store">
							<router-link :to="{name:'home'}" style="color:rgba(0, 0, 0, 0.7);">
							Bookstore
							</router-link> 
						</h1>
					</div>
					<div class="book ml-auto mr-5 mt-4">
						<h5 class="best">The best selling book store</h5>
						<hr class="ml-auto">
					</div>
					

					<!-- <div class="buk mt-4">
						<h5 class="best">The best selling book store</h5>
						<hr>
							
					</div>
 -->
					

					
				</nav>
				
			</div>


		</div>
		
	
	
</template>



<style scoped>
	/*.up{
		height:100px;
	}
	.top{
		height: 100%;
		width: 100%;
		border: 1px solid black;
	}

	.h{
		width: 10%;
		border:1px solid black;
		height: 100%;
		background-color: #53AB96;
	}

	.H{
		color: #ffff;
		margin-top: 10px;
		font-family: Lato;
font-style: normal;
font-weight: 800;
font-size: 50px;
line-height: 77px;
/* identical to box height */


/*color: #FCFBFC;

	}

.store{
	font-family: Lato;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 43px;

color: rgba(0, 0, 0, 0.7);

}*/

hr{
	background-color: #595f5a;
	width: 150px;
	height: 2px;
	/*margin-left:30px;*/
	background: #C4C4C4;
}
.top-nav{
	background: #ffff;
    /*border: 1px solid #423F5A;*/
    box-shadow: 0px 0px 0px;
    border-radius: 0px;
    height: 100px;
    
}
.nav{
	height:100%;
	background-color:#ffff;
	/*width: 100%;*/
	border: 1px solid #ffff;
}

.logo{
	width: 15.5%;
		border:1px solid  #53AB96 ;
		height: 100%;
		background-color: #53AB96;
}

.logo span{
	font-size: 20px;
	font-weight: bold;
}

.searching{
	font-family: Lato;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 43px;

color: rgba(0, 0, 0, 0.7);

}
.searching h6{
	font-size: 8px;
}

.searching span{
	float: right; 
}


.buk a{
	color: #fff;
	font-size: 12px;
	border: 1px;
	padding-left: 250px;
}



 /*.text {
 	color: #ffff;
 	font-size: 20px;
 	margin-top: 20px;
 }
*/
 .best{
 	font-family: Lato;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
/* identical to box height */


color: #53AB96;

 }

 .buk{
 margin-left: 40px;
 }


 .H{
		color: #ffff;
		margin-top: 10px;
		font-family: Lato;
font-style: normal;
font-weight: 800;
font-size: 50px;
line-height: 77px;
/* identical to box height */


color: #FCFBFC;

	}

</style>