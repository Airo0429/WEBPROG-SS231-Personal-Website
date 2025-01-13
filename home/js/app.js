
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
              'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmlp.fandom.com%2Fwiki%2FPinkie_Pie&psig=AOvVaw3JgGAr7TncPE-65lITpruT&ust=1736869228597000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLjbgp2E84oDFQAAAAAdAAAAABAE', // Example image URLs
              'https://static.wikia.nocookie.net/my-little-pony-friendship-is-magic-rakoon1/images/6/6c/Twilight_S2E25_cropped.png/revision/latest?cb=20171229183224',
              'https://static.wikia.nocookie.net/mlp/images/d/d1/Rarity_standing_S1E19_CROPPED.png/revision/latest/scale-to-width-down/225?cb=20130418142043/200'
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
  