<template>
  <div>
    <div class="who-header">
      <div class="work-years">
        <span>2015</span>
        <span>2021</span>
      </div>
    </div>
    <div class="home-form who">
      <h4>DESIGN & FRONT WEB DEVELOPER</h4>
      <h1>WORK</h1>
      <div class="home-description">
        <h6>PORTFOLIO</h6>
        <p>
          디자인 시안 작업을 포함해서, 반응형웹, 하이브리드앱, 모바일앱 플랫폼에 최적화된 홈페이지 작업을 통해 <br/>
고객의 니즈르 충실하게 수행하여 성공적인 비지니스가 되도록 최선을 다하고 있습니다. 
        </p>
        <b-button>
          SEE MORE <strong>WORK?</strong>
          <img src="@/assets/img/ico_edit.png" alt="work icon" />
          <i class="custom-edge">
            <span><span></span></span>
          </i>
        </b-button>
      </div>
    </div>
    <div class="thumb-group">
      <div v-for="(work, index) in workList" :key="`work-${index}`" class="thumbnail-box">
        <div class="thumbnail-circle">
          <img :src="imageSrc(work.imagePath)" alt="">
        </div>
        <p class="thumb-info">
          <span class="date">{{ work.date }}</span>
          <span>{{ work.category }}</span>
        </p>
        <strong>{{ work.title }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Who',
  data: () => {
    return {
      workList: [
        {
          title: 'KAT',
          date: '2018.04',
          category: '하이브리드 웹',
          imagePath: 'img_work_thumnail_1',
        },
        {
          title: '안전보건공단',
          date: '2018.04',
          category: '하이브리드 웹',
          imagePath: 'img_work_thumnail_2',
        },
        {
          title: 'KAT',
          date: '2018.04',
          category: '하이브리드 웹',
          imagePath: 'img_work_thumnail_3',
        },
        {
          title: '안전보건공단',
          date: '2018.04',
          category: '하이브리드 웹',
          imagePath: 'img_work_thumnail_4',
        },
      ],
    }
  },
  methods: {
    imageSrc(val) {
      return require('@/assets/img/'+val+'.png');
    },
  },
}
</script>

<style lang="scss">
.who-header {
  display: flex;

  .work-years {
    display: flex;
    padding-bottom: 6px;

    span {
      font-size: 13px;
      font-weight: 800;
      letter-spacing: -1px;

      &:first-child {
        position: relative;
        padding-right: 80px;

        &:after {
          position: absolute;
          top: 5px;
          right: 10px;
          content: '';
          display: block;
          width: 60px;
          height: 1px;
          background-color: #293344;
        }
      }
    }
  }
}

.home-form.who {
  h4 {
    padding: 15px 0;
    
    &:before {
     top: 4px;
   }
  }

  h1 {
    font-size: 60px;
    line-height: 60px;
    margin-bottom: 20px;
  }

  .home-description {
    button {
      margin: 0 auto;
    }
    p{
      text-align: center;
    }
  }
}

.thumb-group {
  display: grid;
  grid-auto-flow: column;
  padding-top: 50px;
  place-items: center;
}

.thumbnail-circle {
  width: 320px;
  height: 320px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 8px 8px 16px rgb(41, 51, 68, 0.25);

  img {
    margin: 0 0 0 calc(50% - 262px);
  }
}

.thumbnail-box {
  width: 320px;
  text-align: center;

  strong {
    font-weight: 800;
    font-size: 20px;
    line-height: 34px;
  }
}

.thumb-info {
  display: flex;
  justify-content: center;
  padding-top: 20px;

  span {
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.4px;
  }

  .date {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;

    &:after {
      content: '';
      display: block;
      width: 1px;
      height: 10px;
      padding-top: 2px;
      background-color: #293344;
      margin-left: 5px;
    }
  }
}
</style>