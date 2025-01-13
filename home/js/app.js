
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
              'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmy-little-pony-friendship-is-magic-rakoon1.fandom.com%2Fwiki%2FTwilight_Sparkle_%2528SS%2529&psig=AOvVaw2GzZpC8PNdO1BqObpD8eqP&ust=1736869258582000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj-3quE84oDFQAAAAAdAAAAABAU', // Example image URLs
              'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmlp.fandom.com%2Fes%2Fwiki%2FPinkie_Pie&psig=AOvVaw0SbKbjaFY9ZkqbBjcawI7R&ust=1736869954583000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODkmveG84oDFQAAAAAdAAAAABAE',
              'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmlp.fandom.com%2Fwiki%2FRarity&psig=AOvVaw3_zS2pvxMmlKx7d32t6bsc&ust=1736869308180000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOCK7MKE84oDFQAAAAAdAAAAABAE'
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
  