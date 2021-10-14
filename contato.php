<?php include 'inc/header.php' ?>

  <main class="main-root" id="contato">
    <div id="dsn-scrollbar">
      <header>
        <div class="container header-hero">
          <div class="row">
            <div class="col-lg-6">
              <div class="contenet-hero">
                <h5>Vamos conversar</h5>
                <h1>Contato</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="wrapper">
        <div class="root-contact">
          <div class="container section-margin">
            <div class="row">

              <div class="col-lg-6">
                <div class="form-box">
                  <h3>Mande sua proposta</h3>
                  <form id="contact-form" class="form" method="post" action="actions/mail.php" data-toggle="validator">
                    <div class="messages"></div>
                    <div class="input__wrap controls">
                      <div class="form-group">
                        <div class="entry">
                          <label>Seu nome</label>
                          <input id="form_name" type="text" name="name" placeholder="Escreva seu nome ou da sua empresa" required="required"
                            data-error="Favor preencher o nome">
                        </div>
                        <div class="help-block with-errors"></div>
                      </div>

                      <div class="form-group">
                        <div class="entry">
                          <label>Qual seu E-mail?</label>
                          <input id="form_email" type="email" name="email" placeholder="Escreva aqui seu e-mail"
                            required="required" data-error="Favor preencher o e-mail para um retorno">
                        </div>
                        <div class="help-block with-errors"></div>
                      </div>

                      <div class="form-group">
                        <div class="entry">
                          <label>Sobre Projeto</label>
                          <textarea id="form_message" class="form-control" name="message"
                            placeholder="Faça um resumo sobre a proposta, quantas páginas serão, etc." required="required"
                            data-error="Por favor, fale sobre seu projeto."></textarea>
                        </div>
                        <div class="help-block with-errors"></div>
                      </div>
                      <p>*Respota em até um dia útil</p>

                      <div class="image-zoom mt-25" data-dsn="parallax">
                        <button>Enviar proposta</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="box-info-contact">
                  <h3>Começando um novo projeto?</h3>
                  <p>Quer fazer uma proposta de forma mais direta? Use um dos meios de contato:</p>

                  <ul>
                    <li>
                      <span>WhatsApp</span>
                      <a href="https://api.whatsapp.com/send?phone=5511949629527&text=Olá, de falar sobre..." target="_blank" rel="noopener">+55 (11) 94962-9527</a>
                    </li>
                    <li>
                      <span>Email</span>
                      <a href="mailto:lucassouzaannunziato@gmail.com">lucassouzaannunziato@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        <section class="contact-up section-margin section-padding">
          <div class="container">
            <div class="c-wapp">
              <a href="index.php" class="effect-ajax">
                <span class="hiring">
                  portfólio
                </span>
                <span class="career">
                  Veja meus trabalhos!
                </span>
              </a>
            </div>
          </div>
        </section>


        <script>
          $('body').on('submit', '#contact-form', function(e){
            e.preventDefault();
            let data = $('#contact-form').serialize();

            $.ajax({
              url:"actions/mail.php",
              type: "post",
              data:data
            }).done(function(data){
              console.log(data);
            }).fail(function(error){
              alert('Mensagem não enviada, Erro da plataforma, poderia entrar em contato via Email ou celular?<br>Desculpe pelo incômodo');
            });
            
          });
        </script>
<?php include 'inc/footer.php' ?>