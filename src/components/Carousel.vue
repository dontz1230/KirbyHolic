<template>
    <div class="carousel">

    <carousel  :per-page="1" :mouse-drag="true" :autoplay="true"
            :loop="true" :paginationEnabled="true"
                  :paginationColor="'rgba(0,0,0,0.25)'"
                  :paginationActiveColor="'#ff9a9e'">
                    
            <slide v-for="(slide,index) in slides" :key="index">
                <div class="slideContainer"
                     :style="{ 'background': `url(${slide.bg})` }"> 
                    <div class="slideTitle">

                        <div class="slideContent">
                           <h1> {{ slide.title }} </h1>
                           <p>{{ slide.description }}</p>
                        </div>
                                    
                    </div>            
                </div>
            </slide>
        </carousel>

    
    </div>
</template>

<script>
import slide01 from '../assets/slide01.jpg';
import slide02 from '../assets/slide02.jpg';
import slide03 from '../assets/slide03.jpg';
import slide04 from '../assets/slide04.jpg';

export default {
    data(){
        return {
            slides:[
                {
                    title: '卡比之星',
                    description:'擁有足以吞噬一切的可愛大嘴巴，讓人深陷其中無法自拔',
                    bg: slide01
                },
                {
                    title: '呆萌可愛',
                    description:'無憂無慮的外型，紓解你一天的壓力！',
                    bg: slide02
                },
                {
                    title: '12asd3',
                    description:'alaskd lkdm;aisj ijesrij dskflkjdlf ',
                    bg: slide03
                },
                {
                    title: '1asd23',
                    description:'alaskd lkdm;aisj ijesrij dskflkjdlf ',
                    bg: slide04
                },

            ]
        }
    }
}
</script>

<style lang="scss">
@import '../assets/style.scss';

    .slideContainer {
        width:1000px;
        height:700px;
        float:right;
        margin-right: 5%;
        background-repeat: no-repeat;
        background-size:cover!important;
        background-position:center!important;
        position: relative;
        
        &::before {
            position: absolute;
            
            content: '';
            top:0;
            left:0;
            width:100%;
            height:100%;
            background: rgba(255, 128, 128,0.25);
        }

        > .slideTitle {
            background: white;
            border: 1px solid $Color;
            padding: 10px;
            text-align: center;
            border-radius: $BorderRadius;
            box-shadow: $DeepShadow;
            width:500px;
            height:300px;
            position:relative;
            transform: translate(-250px, 200px);

            > .slideContent{
                position:absolute;
                width:100%;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);

                > h1 {
                color: $Color;
            }

                > p {
                    color: grey;
                }
            }
        }
            
       
    }
    .carousel {
        margin-bottom: 20px;
    }
</style>