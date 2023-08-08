//this function gets triggered when our vision button in the about page get clicked

function bb(){
    document.getElementById('ss').innerHTML = "<h3>A Vision to Bridge Generations - Taking Gramophones to the Web</h3><p>At Victor, we believe that music is not just heard; it is felt. It has the power to evoke emotions, kindle memories, and create moments that linger in your heart forever. As you explore our collection, you'll find yourself captivated by the soul-stirring symphonies that emerge from these enchanting machines.We are excited to embark on this musical journey with you, and we promise to deliver nothing short of the extraordinary.</p>";
    document.getElementById('ss').style.padding="2%";
    document.getElementById('ss').style.fontSize="1em";
    document.getElementById('ss').style.background="#b59e67";
    document.getElementById('ss').style.color="#1f1e1e";
}
// the functions from sec1 to sec4 gets triggered when the four buttons in the last section gets clicked
function sec1(){
    document.getElementById('ss1').innerHTML = "<div><h3>Quality you can afford</h3><p> With Victor Talking Machine Company, quality and affordability go hand in hand. Immerse yourself in the golden era of music, indulge in the allure of vintage sound, and let our carefully curated records bring joy and nostalgia to your ears, all within your means. </p></div>";
    document.getElementById('ss2').innerHTML = " ";
    document.getElementById('ss3').innerHTML = " ";
    document.getElementById('ss4').innerHTML = " ";
}
function sec2(){
    document.getElementById('ss2').innerHTML = "<div><h3>Products you can trust</h3><p>Each record in our collection undergoes meticulous inspection and grading by our team of experts, ensuring that only the finest and most genuine pieces make it to your hands. We take pride in offering you records that have been cared for, preserving their historical value and delivering an unparalleled listening experience.</p></div>";
    document.getElementById('ss1').innerHTML = " ";
    document.getElementById('ss3').innerHTML = " ";
    document.getElementById('ss4').innerHTML = " ";
}
function sec3(){
    document.getElementById('ss3').innerHTML = " <div><h3>Purchases with an impact</h3><p>A portion of every sale goes towards supporting music education programs for underprivileged communities. We believe that music has the power to inspire, uplift, and transform lives, and we are committed to sharing this magic with those who need it the most.</p></div>";
    document.getElementById('ss1').innerHTML = " ";
    document.getElementById('ss2').innerHTML = " ";
    document.getElementById('ss4').innerHTML = " ";
}
function sec4(){
    document.getElementById('ss4').innerHTML = " <div><h3>Money back guarantee</h3><p>Our commitment to your satisfaction is unwavering, and we want you to have complete confidence when exploring the vintage sounds in our collection. We take pride in curating records with meticulous care, and we are confident that you will love the timeless melodies that grace your ears.                </p>            </div> ";
    document.getElementById('ss1').innerHTML = " ";
    document.getElementById('ss3').innerHTML = " ";
    document.getElementById('ss2').innerHTML = " ";
}
// Function to toggle the file selector and other text based on the selected option
function toggleFileSelector() {
    const querySelect = document.getElementById('query');// The select element
    const fileSelection = document.getElementById('fileSelection');// The file selection element
    const selectedOption = querySelect.value;
  // Check the selected option and show/hide elements accordingly 
    if (selectedOption === 'damaged') {
      // If 'damaged' option is selected, show the file selection and hide the other text
        fileSelection.style.display = 'block';
        otherText.style.display = 'none';
      } 
      // If 'other' option is selected, show the other text and hide the file selection
      else if (selectedOption === 'other') {
        fileSelection.style.display = 'none';
        otherText.style.display = 'block';
      } else {
         // If neither 'damaged' nor 'other' option is selected, hide both the file selection and other text
        fileSelection.style.display = 'none';
        otherText.style.display = 'none';
        otherInput.value = ''; // Reset the input value if not selected
      }
    }
// Function to toggle the visibility of contact information based on the contactType (email or phone)
    function toggleContactInfo(contactType) {
        const emailDetails = document.getElementById('emailDetails');
        const phoneDetails = document.getElementById('phoneDetails');
        const emailContent = document.getElementById('emailContent');
        const phoneContent = document.getElementById('phoneContent');

      // Toggle the visibility of email content and update the displayed text accordingly
        if (contactType === 'email') {
          if (emailContent.style.display === 'none') {
            emailContent.style.display = 'inline';
            emailDetails.innerText = 'Click to hide';
          } else {
            emailContent.style.display = 'none';
            emailDetails.innerText = 'Click to view';
          }
           // Toggle the visibility of phone content and update the displayed text accordingly
        } else if (contactType === 'phone') {
          if (phoneContent.style.display === 'none') {
            phoneContent.style.display = 'inline';
            phoneDetails.innerText = 'Click to hide';
          } else {
            phoneContent.style.display = 'none';
            phoneDetails.innerText = 'Click to view';
          }
        }
      }

       // Toggle the visibility of phone content and update the displayed text accordingly
const products = document.querySelectorAll('.product');

// Added event listener for each product to handle hover
products.forEach(product => {
  product.addEventListener('mouseover', () => {
    product.classList.add('enlarged');
  });

  product.addEventListener('mouseout', () => {
    product.classList.remove('enlarged');
  });
});
// Function to show a success alert when subscription is successful
function success(){
  alert("You've successfully subscribed." );
}

// Function to replace the image  with a video iframe
function video(){
  document.getElementById("vv").innerHTML="<iframe width='560' height='315' class='vid' src='https://www.youtube.com/embed/1p0pe-1_xUk' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"
}

// Function to show the cookie alert
function sss() {

      alert('This website uses cookies to enhance your experience. By continuing, you accept our use of cookies.');
 
}

// Functions to add products to the cart (Alerts with messages)
function add1() {
  alert('product 1 added to cart');
} 

function add2() {
  alert('product 2 added to cart');
} 
function add3() {
  alert('product 3 added to cart');
} 

function add4() {
  alert('product 4 added to cart');
} 
function add5() {
  alert('product 5 added to cart');
} 

function add6() {
  alert('product 6 added to cart');
} 
// Function to check out and display the total amount
function check3(){
  document.getElementById("check").innerHTML =" All your products have been succesfuly added to the cart. Your Total is 923$"
}