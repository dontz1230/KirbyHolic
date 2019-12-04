<template>
    <div class="reason" id="reason">
        <div class="r-container">
            <div class="r-title">
                <h1>關於我們</h1>
                <h5>ABOUT</h5>
            </div>
            <div class="r-content">
                <p>
                    一群熱愛卡比之星的鐵粉，為了造福更多在台灣也喜歡 Kirby 的同好，因而努力不懈的往返日本代購。
                    </p>
                    <p>
                    細心挑選品質最高的正版卡比之星產品，希望能夠帶給台灣的卡比控們，更多品質優良的卡比之星！
                </p>
                <p>
                    讓『黑洞胃』的夢幻粉紅圓滾滾小生物，療癒這個世界吧！
                </p>
                <div class="r-btn">
                    <button>觀看詳情</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

// Using ScrollReveal's default configuration
import scrollReveal from 'scrollreveal';

export default {
    name: 'Guarantee',
    data(){
        return {
            scrollReveal: scrollReveal()
        }
    },
    mounted(){
        this.scrollReveal.reveal('.r-title', {
        // 动画的时长
        duration: 400,
        // 延迟时间
        delay: 300,
        // 动画开始的位置，'bottom', 'left', 'top', 'right'
        origin: 'top',
        // 回滚的时候是否再次触发动画
        reset: true,
        // 在移动端是否使用动画
        mobile: true,
        // 滚动的距离，单位可以用%，rem等
        distance: '200px',
        // 其他可用的动画效果
        opacity: 0,
        easing: 'ease-in-out',
        scale: 0,
    });

    this.scrollReveal.reveal('.r-content', {
        // 动画的时长
        duration: 500,
        // 延迟时间
        delay: 500,
        // 动画开始的位置，'bottom', 'left', 'top', 'right'
        origin: 'right',
        // 回滚的时候是否再次触发动画
        reset: true,
        // 在移动端是否使用动画
        mobile: true,
        // 滚动的距离，单位可以用%，rem等
        distance: '200px',
        // 其他可用的动画效果
        opacity: 0,
        easing: 'ease-in-out',
        scale: 1,
    });

    }
}
</script>

<style lang="scss">
@import url('../assets/style.scss');

.reason {
    width: 100%;
    z-index:2;
    overflow: hidden;
    background-image: url(../assets/bg_cloth.jpg);
    
    > .r-container {
        margin: 0 auto;
        padding: 70px 100px;
        display: flex;
        flex-flow: row nowrap;
        max-width: 1140px;
        > .r-title {
            writing-mode: vertical-lr;
            margin-right: 50px;
            color: rgb(96, 52, 31);
            > h5 {
                font-size: .8rem;
            }
            > h1 {
                font-size: 2rem;
                letter-spacing: 15px;
                margin-right: 15px;
            }
        }
        > .r-content {
            line-height: 2.1;

            > .r-btn button{
                border: none;
                background:rgb(96, 52, 31);
                height: 40px;
                width: 220px;
                margin-top: 25px;
                color: #FFF;
            }
        }
    }
}

@media screen and (max-width: 768px){
     .reason {
         > .r-container {
        margin: 0 auto;
        padding: 70px 30px;
        flex-flow: column nowrap;
        > .r-title {
            writing-mode: horizontal-tb;
            text-align: center;
            margin: auto;
            margin-bottom: 25px;
            color: rgb(96, 52, 31);
            > h5 {
                font-size: 0.8rem;
                letter-spacing: 1px;
            }
            > h1 {
                font-size: 1.5rem;
                letter-spacing: 15px;
                margin: auto;
                margin-bottom: 10px;
            }
        }
        > .r-content {
            line-height: 1.8;
            font-size: 14px;
            > .r-btn button{
                border: none;
                background:rgb(96, 52, 31);
                height: 40px;
                width: 100%;
                margin-top: 25px;
                color: #FFF;
            }
        }
    }
     }
}

</style>