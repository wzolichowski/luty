<template>
  <div class="container">
    <h1 style="color: #e91e63; font-size: 3rem;">Happy Valentine's Day, My Love! 💖</h1>
    <p style="font-size: 1.5rem; color: #555;">
      You make every day special, but today is all about you and me. 💕
    </p>
    <img
      src="/heart.png" 
      alt="Heart"
      style="width: 200px; margin-top: 1rem;"
    />
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffe4e1; /* Light pink background applied to the whole site */
}

.container {
  color: #333;
  text-align: center;
  padding: 2rem;
  border-radius: 15px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
</style>
