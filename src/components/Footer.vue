<template>
  <div>
    <footer>
      <div class="footerContainer">
        <a href="javascript:;" @click.prevent = scrollToTop>
          <img src="https://i.ibb.co/zSq42nc/kirbylogo.png" alt="Kirby Holic" border="0" />
        </a>

        <div class="copyright">
          <span>本網頁純粹個人練習使用</span>
        </div>

        <div class="copyright">
          <span>Copyright &copy; 2019 Kirby Holic</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
     methods: { 
           scrollToTop() {
                window.scrollTo(0,0);
           }
        }
}
</script>

<style lang="scss">
footer {
  padding-top: 40px;
  background: #fff;
  position: relative;
  bottom: 0;
  width: 100%;
  text-align: center;
  overflow: hidden;
  color: #fff;

  &::before {
    position: absolute;
    top: 100px;
    left: 0;
    content: " ";
    background: #f8bbd0;
    width: 100%;
    height: calc(100vw);
    border-radius: 100%;
  }

  > .footerContainer {
    position: relative;
    margin: 30px auto;

    > a img {
      margin-bottom: 10px;
      &:hover {
          animation: bounce .3s ease-in-out;
      }
      @keyframes bounce {
          0%{
              transform: scale(0.8);
          }
           50%{
              transform: scale(1.3);
          }
          70%{
              transform: scale(1);
          }
          90%{
              transform: scale(1.2);
          }
          100%{
transform: scale(1);
          }
      }
    }
  }
}
</style>