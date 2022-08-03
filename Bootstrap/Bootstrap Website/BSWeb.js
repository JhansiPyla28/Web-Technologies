<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		Bootstrap Website
	</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	<link rel="stylesheet" type="text/css" href="bootstrapWebsite.css">
</head>
<body id="body">
	<a href="#top" id="top"></a>
	<header id="main-header">
		<div id="images">
		<img src="Jimmy.jpg" alt="JHANSI PYLA" width="80px" id="image" height="80px" title="JHANSI PYLA"  onmouseover="change();" onmouseout="unchange();">
		</div>
		
		<hgroup class="text-center">
			<h1 style=" display: inline;">My Website using Bootstrap</h1><br>
			<h3 style=" display: inline;">Developed by Jhansi</h3>
		</hgroup>
	</header>
	<div class="container-fluid bg-dark">
		<nav class="navbar navbar-expand-md  navbar-dark">
			<a class="navbar-brand">JS</a>
			<button class="navbar-toggler" data-toggle="collapse" data-target="#js"><span class="navbar-toggler-icon"></span></button>
			<div class="collapse navbar-collapse">
				<ul class="navbar-nav">
					<li class="nav-item"><a class="nav-link " href="#">HOME</a></li>
					<li class="nav-item"><a class="nav-link dropdown-toggle" href="#">EXAM</a>
						<ul class="dropdown-menu">
							<li><a href="#" class="dropdown-item">LOGIN</a></li>
							<li><a href="#" class="dropdown-item">REGISTER</a></li>
						</ul>
					</li>
					<li class="nav-item"><a class="nav-link" href="#">BRANCHES</a></li>
					<li class="nav-item"><a class="nav-link" href="#">CONTACT</a></li>
				</ul>
			</div>
		</nav>
	</div>
	<script type="text/javascript" src="bootstrapWebsite.js"></script>
</body>
</html>