<template>
    <div class="cat-container">
        <div class="cat-container-inner">
            <img class="cat" src="~/assets/images/cat.png" alt="cat" />
            <img :class="{ 'dontlook': dontlook }" class="leftpaw" src="~/assets/images/cat/left_paw.png"
                alt="leftpaw" />
            <img :class="{ 'dontlook': dontlook }" class="rightpaw" src="~/assets/images/cat/right_paw.png"
                alt="rightpaw" />
        </div>
    </div>

</template>

<script setup lang="ts">
const useCatComposable = useCat();
const dontlook = useCatComposable.dontlook
</script>

<style scoped>
.cat-container {
    position: absolute;
    bottom: 0px;
    left: 0;
}

.cat-container-inner {
    width: 400px;
    height: 400px;
    position: relative;
    overflow: hidden;
}

.cat {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
}

.leftpaw {
    position: absolute;
    bottom: -400px;
    left: -150px;
    width: 400px;
    transform: translateY(0);
    transition: transform 0.3s ease;
}

.rightpaw {
    position: absolute;
    bottom: -400px;
    left: 70px;
    width: 400px;
    transform: translateY(0) rotate(0);
    transition: transform 0.6s ease;
}

.leftpaw.dontlook {
    transform: rotate(50deg);
    transform: translateY(-230px);
}

.rightpaw.dontlook {
    transform: translateY(-220px) rotate(-25deg);
}

@media (max-height: 740px) or (max-width: 1740px) {
    .cat-container-inner {
        width: 300px;
        height: 300px;
    }
    .rightpaw {
        bottom: -350px;
        left: 60px;
    }
    .leftpaw {
        bottom: -350px;
        left: -100px;
    }
}

@media (max-width: 400px) {
    .cat-container {
        display: none;
    }
}

@media (max-height: 720px) {
    .cat-container {
        display: none;
    }
}
</style>