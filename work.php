<?php include 'inc/header.php' ?>
    <main class="main-root" id="projects">
        <div id="dsn-scrollbar">
            <header>
                <div class="container header-hero">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="contenet-hero">
                                <h5>Resumo das </h5>
                                <h1>Competências</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="wrapper mt-35">
                <div class="root-work">
                    <div class="container ">
                        <div class="box-title" data-dsn-title="cover">
                            <h2 class="title-cover" data-dsn-grid="move-section" data-dsn-move="-70">Fullstack</h2>
                        </div>

                        <div class="filterings">
                            <div class="filtering-wrap">
                                <div class="filtering">
                                    <div class="selector"></div>
                                    <button type="button" class="active" onclick="competencias()">Competências gerais</button>
                                    <button type="button" onclick="languages()">Linguagens</button>
                                    <button type="button" onclick="courses()">Cursos </button>
                                    <button type="button" onclick="projects()">Projetos GitHub</button>
                                </div>
                            </div>
                        </div>

                        <div class="projects-list">
                        </div>
                    </div>
                </div>
    <script src="assets/js/work.js"></script>
<?php include 'inc/footer.php' ?>
            