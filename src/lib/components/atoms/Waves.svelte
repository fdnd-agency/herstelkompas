<script>
	let { color1 = '#3b46d3',color2='#DCEBF5', height = 100 } = $props();

	// encode # to %23
	let encodedColor = encodeURIComponent(color1);
	let encodedColor2 = encodeURIComponent(color2);
</script>
<div class="waves-container">
	<div class="waves">
		<div class="wave wave1" style="height: {height}px;background-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -0.00012207 500 100'%3E%3Cpath d='M 0 37.8889 C 97.3839 37.8889 128.352 -0.0783 253.95 0 C 379.202 0 410.515 37.8889 500 37.8889 L 500 100 L 0 100 Z' fill='{encodedColor}'/%3E%3C/svg%3E&quot;);"></div>
		<div class="wave wave2" style=" height: {height}px; background-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -0.00012207 500 100'%3E%3Cpath d='M 0 37.8889 C 97.3839 37.8889 128.352 -0.0783 253.95 0 C 379.202 0 410.515 37.8889 500 37.8889 L 500 100 L 0 100 Z' fill='{encodedColor2}'/%3E%3C/svg%3E&quot;);"></div>
	</div>
</div>


<style>
	.waves-container{
		position: absolute;
		width: 100vw;
		height: 100%;
		overflow: hidden;
		animation: zindexchange 3.5s linear;
		z-index: -1;
	}

	.waves{
		position: absolute;
		translate: 0 110vh;
		width: 100%;
		z-index: 9;
		animation: waterUp 3.5s linear;
	}
	.waves::after{
		height: 100vh;
		top: 100%;
		content: '';
		width: 100%;
		background-color: #137BC0;
		position: absolute;
	}
	.waves::before{
		background-image: url('/img/logozzazsingle.png');
		background-size: 110px 119px;
		top: 50vh;
		left: 50vw;
		position: absolute;
		content: '';
		z-index: 9999;
		translate: -50% -50%;
		width: 200px;
		height: 200px;
		background-repeat: no-repeat;
		background-position: center center;
		background-color: rgba(255, 255, 255, 0.8);
		border-radius: 10px;
		/*animation: pumpImg 1s linear;*/
	}
	.wave2{
		position: absolute;
		background-position: 340px 0;
		top: -10px;
		width: 100%;
		z-index: -1;
	}
	.wave{
		background-size: cover;
	}
	@media (min-width: 500px){
		.wave{
			background-size: initial;
		}
	}
	.wave1{
		animation: waving1 1s infinite linear;
	}
	.wave2{
		animation: waving2 2s infinite linear;
	}
	@keyframes waving1 {
		from {
			background-position: 0% 0;
		}
		to {
			background-position: 500px 0;
		}
	}
	@keyframes waving2 {
		from {
			background-position: 340px 0;
		}
		to {
			background-position: 840px 0;
		}
	}

	@keyframes waterUp {
		0% {
			translate: 0 -100px;
		}
		30%{
			translate: 0 0px;
		}
		100% {
			translate: 0 110vh;
		}
	}
	@keyframes pumpImg {
		0% {
			transform: scale(1);
		}
		25% {
			transform: scale(0.8);
		}
		50% {
			transform: scale(1.2);
		}
		75% {
			transform: scale(0.8);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes zindexchange {
		0% { 
			z-index: 99;
		}
		100% {
			z-index: -1; 
		}
	}
</style>