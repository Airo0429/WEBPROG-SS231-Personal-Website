
new Vue({
    el: '#app',
    components: {
      'picture-gallery': {
        template: `
          <div class="gallery">
            <h2>Picture Gallery</h2>
            <div class="images">
              <img v-for="(image, index) in images" :key="index" :src="image" alt="Gallery Image" class="gallery-image"/>
            </div>
          </div>
        `,
        data() {
          return {
            images: [
              'https://static.wikia.nocookie.net/mlp/images/4/42/PinkiePie.png/revision/latest?cb=20140611235315&path-prefix=es', 
              'https://static.wikia.nocookie.net/mlp/images/d/d1/Rarity_standing_S1E19_CROPPED.png/revision/latest/scale-to-width-down/225?cb=20130418142043',
              'https://static.wikia.nocookie.net/mlp/images/4/4b/Rainbow_Dash_Wonderbolt_fantasy_cropped_S1E3.png/revision/latest?cb=20210206044556'
            ]
          };
        }
      },
  
      'survey-form': {
        template: `
          <div class="form-container">
            <h2>Guestbook / Survey Form</h2>
            <form @submit.prevent="submitForm">
              <div>
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" required/>
              </div>
              <div>
                <label for="comment">Comment:</label>
                <textarea id="comment" v-model="comment" required></textarea>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
            <div v-if="submitted">
              <p>Thank you for your submission, {{ name }}!</p>
              <p>Your comment: {{ comment }}</p>
            </div>
          </div>
        `,
        data() {
          return {
            name: '',
            comment: '',
            submitted: false
          };
        },
        methods: {
          submitForm() {
            this.submitted = true;
          }
        }
      }
    }
  });
  