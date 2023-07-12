<template>
  
    <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="text-center">
                <img :src="product.image" class="img-fluid" style="max-width: 200px;" alt="">
            </div>
            <div class="card-body">
                <h5 class="card-title text-center">{{ product.fruit_name }}</h5>
                <hr>

                <div class="d-flex align-items-center">

                    <div class="flex-fill text-start border-end">
                        <p class="m-0">
                            <b>From:</b> {{ product.country }}
                            <br>
                            <b>Organic:</b> <i class="fas" :class = "{'fa-check text-success': organic, 'fa-times text-danger': !organic}"></i> 
                        </p>
                    
                            
                        
                    </div>

                    <div class="px-3 fw-bold text-success">
                        ${{ product.price }}
                    </div>

                </div>
                <hr>

                <div class="text-end">
                    
                    
                    <button type="button" class="btn btn-primary" @click="$emit('vista-producto', product)">
                        <i class="fas fa-eye"></i>
                    </button>                        
    

                </div>

            </div>
        </div>
    </div>

</template>
  
<script>
export default {
name: 'ProductCard',
props: ['product'],

data () {
    return {
        organic: this.product.organic
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
margin: 40px 0 0;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}
</style>
  