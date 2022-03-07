<template>
  <div class="page">
      <header>
        <nav class="nav-link">
          <router-link 
            class="link"
            v-for="item in navLinks"
            :key="item.id"
            :to="{ path: '/', hash: item.id }"
            :class="activeClass(item.id)">{{item.title}}</router-link>
        </nav>
      </header>
      <main>
        <div class="basic-wrapper" id="home">
          <div class="basic-info">
            <h1 class="name">Ershad Rahi</h1>
            <h4 class="desc">JavaScript Web Developer</h4>
          </div>
          <div class="inline-flex justify-end items-start">
            <Laptop />
          </div>
        </div>
        <div class="about" id="about">
          <div class="about-wrapper">
             <About   />
          </div>
          <div class="about-content">
            <h4 class="about-title">About Me</h4>
            <p>
              I'm Ershad, a full-stack developer with a background as an electrical engineer. I've gathered experience in programming logic from my background, which led me toward my interest - something that I'm very passionate about!
            </p>
            <p>
              I am a hard-working, hands-on developer who understands both functional and object-oriented programming. 
              As a front-end developer, I'm using this knowledge together with my creativity and problem-solving skills to build great user experiences. 
            </p>
            <p>
              I like clean code and prefer to create functional, reusable, and scalable code for modern web applications. Being a fast learner and getting acquainted with modern javascript frameworks and databases such as Vue, React, Express, Deno, GraphQl, MongoDB, MySQL in practice helped me a lot so far. 
            </p>
            <p>
              I am looking for new challenges and a suitable position with a forward-thinking company that offers a pleasant working and learning environment to continue to grow as a professional developer.
            </p>
          </div>
        </div> 
        <div class="educations" id="educations">
          <div class="educations-content">
            <h4 class="educations-title">Educations</h4>
            <div class="items">
              <a
                v-for="(item, i) in educations"
                :key="i"
                :href="item.link"
                target="_blank"
              >
                <div class="item" :class="{'last': i===educations.length-1}">
                  <div class="grade">
                    {{ item.grade }}
                  </div>
                  <div class="uni">
                    {{ item.uni }}
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="educations-wrapper">
            <img src="@/assets/educations.svg" alt="educations">
          </div>
        </div>
        <div class="experiences" id="experiences">   
          <div class="experiences-wrapper">
            <img src="@/assets/experiences.svg" alt="experiences">
          </div>
          <div class="experiences-content">
            <h4 class="experiences-title">Experiences</h4>
            <div class="item" v-for="(item, i) in experiences" :key="i" :class="{'last': i===educations.length-1}">
                <div class="position">{{item.position}}</div>
                <a :href="item.link" target="_blank">
                    <div class="company">{{item.company}}</div>
                </a>
                <div class="detail">
                    <VIcon>mdi-map-marker-outline</VIcon>
                    <span>{{item.location}}</span>
                </div>
              </div>
          </div>
        </div>
      </main>
    <div class="footer">
      <div class="fine-me">
        <h4 class="section-title">Find Me Online:</h4>
        <div class="fine-me-items">
          <a
            v-for="(item, i) in findMeItems"
            :key="i"
            :href="item.to"
            target="_blank"
          >
            <VIcon size="22px">{{ item.icon }}</VIcon>
          </a>
        </div>
      </div>
      <span class="Copyright">Copyright © 2022. All Rights Reserved.</span>

    </div>
  </div>
</template>


<script>
import Laptop from '@/components/laptop';
import About from '@/components/about'

export default {
  name: 'Home',
  components: {
    Laptop,
    About
  },
  data:()=> ({
    navLinks: [
      {
        title: 'Home',
        id: '#home' 
      },
      {
        title: 'About',
        id: '#about' 
      },
      {
        title: 'Educations',
        id: '#educations' 
      },
      {
        title: 'Experiences',
        id: '#experiences' 
      },
    ],
    findMeItems: [
      {
        icon: "mdi-linkedin",
        to: "https://www.linkedin.com/in/ershadrahi",
      },
      {
        icon: "mdi-github",
        to: "https://github.com/ErshadRahi",
      },
      {
        icon: "mdi-skype-business",
        to: "https://join.skype.com/invite/KKnHV4znW0CV",
      },
      {
        icon: "mdi-email-outline",
        to: "mailto:ershadrahi@gmail.com",
      },
    ],
    educations: [
      {
        grade: "Master of Electrical Engineering",
        uni: "Shahrood University of Technology",
        link: "https://shahroodut.ac.ir/en/",
      },
      {
        grade: "Bachelor of Electrical Engineering",
        uni: "Bu-Ali Sina University",
        link: "https://basu.ac.ir/en/home",
      },
      {
        grade: "High School Diploma in Mathematics",
        uni: "Besat High School",
        link: "http://beasaat.blogfa.com/",
      },
    ],
    experiences: [
      {
        position :"Senior Frontend Developer",
        link: "https://dapa.ir/en",
        company: "Danesh Parsian",
        location: "Tehran, Iran"
      },
      {
        position: "Senior Frontend Developer",
        link: "http://mobtakerteam.com",
        company:"MobtakerTeam",
        location: "Tehran, Iran"
      },
      {
        position :"Senior Frontend Developer",
        link: "https://inverseschool.com",
        company :"INVERSE School",
        location: "Tehran, Iran"
      },
      {
        position :"Full Stack Developer",
        link: "https://denak.ir",
        company :"Denak",
        location: "Remote"
      },

    ]
  }),
  methods:{
    activeClass(id){
      if(this.$route.hash === id || (this.$route.hash === '' && id === '#home') ) return 'active'
    }
  },
};
</script>
<style lang="scss">
.page{
  background-color: #080543;
  color: #f8f0f8;
  font-family: "Merriweather Sans", sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  header {
    position: fixed;
    height: 60px;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #080543;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    padding: 0 10px;
    @media only screen and (min-width: 576px) {
       justify-content: flex-start;
       padding: 0 30px;
    }
    .nav-link{      
      .link{
        color: #f8f0f8;
        box-sizing: border-box;
        border-bottom: 2px solid transparent;
        padding: 6px 0;
        margin: 8px;
        &.active{
          color: #e9b9e9;
          border-bottom: 2px solid #e9b9e9;
          transition: 0.3s ease-in-out;
        }
        @media only screen and (min-width: 576px) {
          padding: 8px 0;
          margin: 10px;
        }
        
      }
    }
  }
  main{
    flex: 1;
    margin-top: 80px;
    margin-bottom: 100px;
    @media only screen and (min-width: 576px) {
      margin-top: 80px;
    }
    @media only screen and (min-width: 992px) {
      margin-top: 100px;
    }
    @media only screen and (min-width: 1200px) {
      margin-top: 80px;
    }
    .basic-wrapper {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 0 20px;
      @media only screen and (min-width: 576px) {
        padding: 0 30px;
      }
      @media only screen and (min-width: 768px) {
        padding: 20px 50px;
      }
      @media only screen and (min-width: 992px) {
        padding: 30px 60px;
      }
      @media only screen and (min-width: 1200px) {
        padding: 60px 100px;
      }
      @media only screen and (min-width: 1400px) {
        padding: 80px 100px;
      }
      .basic-info{
        .name{
          font-size: 18px;
          font-weight: 700;
          color: #ffeaf2;
          letter-spacing: 0.06rem;
          @media only screen and (min-width: 576px) {
           font-size: 34px;
          }
          @media only screen and (min-width: 768px) {
            font-size: 40px;
          }
          @media only screen and (min-width: 992px) {
            font-size: 44px;
          }
          @media only screen and (min-width: 1200px) {
            font-size: 46px;
          }
          @media only screen and (min-width: 1400px) {
            font-size: 50px;
          }
        }
        .desc{
          font-size: 12px;
          font-weight: 700;
          color: #da8eab;
          letter-spacing: 0.04rem;
           @media only screen and (min-width: 576px) {
           font-size: 16px;
          }
          @media only screen and (min-width: 768px) {
            font-size: 18px;
          }
          @media only screen and (min-width: 992px) {
            font-size: 20px;
          }
          @media only screen and (min-width: 1200px) {
            font-size: 22px;
          }
          @media only screen and (min-width: 1400px) {
            font-size: 24px;
          }
        }
      }
    }
    .about{
      @media only screen and (min-width: 576px) {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
      }
      @media only screen and (min-width: 992px) {
         margin-top: 40px;
      }
      
      &-content{
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.03rem;
        padding: 0 30px;
        @media only screen and (min-width: 1200px) {
          padding: 0 80px;
          line-height: 28px;
        }
        
      }
      &-title{
        font-weight: 600;
        color: #da8eab;
        letter-spacing: 0.03rem;
        margin: 20px 0;
        font-size: 20px;
        @media only screen and (min-width: 576px) {
          margin: 22px 0 10px;
          font-size: 24px;
        }
        @media only screen and (min-width: 992px) {
          margin: 18px 0 14px;
          font-size: 26px;
        }
        @media only screen and (min-width: 1200px) {
          margin: 40px 0 14px;
          font-size: 28px;
         
        }
      }
      
    }
    .educations {
      margin-top: 100px;
      @media only screen and (min-width: 576px) {
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
      }
      @media only screen and (min-width: 992px) {
         margin-top: 40px;
      }
      
      &-wrapper {
        img {
         display: none;
          @media only screen and (min-width: 576px) {
            display: block;
            width: 200px;
            margin-right: 20px;
          }
          @media only screen and (min-width: 768px) {
            width: 260px;
          }
          @media only screen and (min-width: 992px) {
            width: 260px;
            
          }
          @media only screen and (min-width: 1200px) {
            width: 300px;
          }
        }
      }
      
      &-content{
        width: 100%;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.03rem;
        margin-right: 40px;
        padding: 0 30px;
        @media only screen and (min-width: 1200px) {
          width: 700px;
        }
        @media only screen and (min-width: 1400px) {
          width: 800px;
        }

        .item {
          border-bottom: 1px solid #eee;
          &.last{
            border: none;
          }
          padding: 10px 0;
          .grade {
            font-size: 16px;
            font-weight: 600;
            color: #a498fb;
          }
          .uni {
            font-size: 12px;
          }
        }
      }
      &-title{
        font-weight: 600;
        color: #da8eab;
        letter-spacing: 0.03rem;
        margin: 20px 0;
        font-size: 20px;
        @media only screen and (min-width: 576px) {
          margin: 24px 0 10px;
          font-size: 24px;
        }
        @media only screen and (min-width: 992px) {
          margin: 18px 0 14px;
          font-size: 26px;
        }
        @media only screen and (min-width: 1200px) {
          margin: 40px 0 14px;
          font-size: 28px;
         
        }
      }

    }
    .experiences {
      margin-top: 80px;
      @media only screen and (min-width: 576px) {
        display: flex;
        align-items: flex-start;
      }
      @media only screen and (min-width: 992px) {
         margin-top: 40px;
      }
      &-wrapper {
        img {
         display: none;
          @media only screen and (min-width: 576px) {
            display: block;
            width: 200px;
            margin-left: 20px;
          }
          @media only screen and (min-width: 768px) {
            width: 260px;
          }
          @media only screen and (min-width: 992px) {
            width: 260px;
            
          }
          @media only screen and (min-width: 1200px) {
            width: 300px;
          }
        }
      }
      
      &-content{
        width: 100%;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.03rem;
        padding: 0 30px;
        @media only screen and (min-width: 576px) {
          margin-left: 40px;
        }
        @media only screen and (min-width: 1200px) {
          width: 100%;
          margin-left: 40px;
        }
        @media only screen and (min-width: 1400px) {
          width: 800px;
        }
        .item {
          border-bottom: 1px solid #eee;
          &.last{
            border: none;
          }
          padding: 10px 0;
          .position {
            font-size: 16px;
            font-weight: 600;
            color: #a498fb;
          }
          .company {
            font-size: 14px;
            font-weight: 600;
            color: #bdd0fb;
          }
          .detail {
            display: inline-flex;
            font-size: 12px;
            i{
              font-size: 14px;
              margin-right: 4px;
              color: #f8f0f8;
            }
          }
        }
      }
      &-title{
        font-weight: 600;
        color: #da8eab;
        letter-spacing: 0.03rem;
        margin: 20px 0;
        font-size: 20px;
        @media only screen and (min-width: 576px) {
          margin: 24px 0 10px;
          font-size: 24px;
        }
        @media only screen and (min-width: 992px) {
          margin: 18px 0 14px;
          font-size: 26px;
        }
        @media only screen and (min-width: 1200px) {
          margin: 40px 0 14px;
          font-size: 28px;
         
        }
      }

    }
  }
  .footer{
    height: 70px;
    background: #110116ad;
    text-align: center;
    width: 100%;


    .Copyright{
      margin: 10px;
      font-size: 12px;
    }
    .fine-me {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: white;
      justify-content: flex-end;
      padding: 10px 30px;
      h4{
        font-size: 14px;
      }
      a{
        margin-left: 10px;
        i{
          color: #f8f0f8;
          &:hover{
            color: #e9b9e9;
          }
        }
        
      }
  }
  }
}

</style>

