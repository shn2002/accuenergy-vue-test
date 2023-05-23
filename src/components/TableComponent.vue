<template>
    <div class="row justify-content-center">
        <div class="py-3 px-3 "></div>
        <div class="col-8 border border-primary py-3 px-3">
            <h6>Question 4: A table with pagination to show all searched places:</h6><br />
            <h6>a) Display a maximum of 10 records on each page.</h6><br />
            <h6>b) A checkbox at the beginning of each row to let users select multiple records at the same time.</h6><br />
            <h6>c) A delete button on the top to remove all selected records as well as their markers on the map.</h6><br />
        <div class="row">
            <button class="btn btn-warning" @click="deleteCities">Delete Record(s)</button>
        </div>    
            <table class="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>City</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in cityPagination" :key="index">
                        <td><input class="form-check-input" type="checkbox" :checked="item.isChecked" 
                                @change="updateCheckedStatusHandler($event, item)"></td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.isChecked ? 'Checked' : 'Unchecked' }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="pagination justify-content-end">
                <ul class="pagination">
                    <li class="page-item">
                        <a @click="setCurrentPageIndex(currentPageIndex - 1)"
                            :class="{ 'page-link custom-link': currentPageIndex !== 1, 'page-link custom-link disabled': currentPageIndex === 1 }">
                            Previous
                        </a>
                    </li>
                    <li class="page-item" v-for="(item, index) in totalPageCount" :key="index">
                        <a @click="setCurrentPageIndex(item)"
                            :class="{ 'page-link custom-link': currentPageIndex !== item, 'page-link custom-link active': currentPageIndex === item }">
                            {{ item }}
                        </a>
                    </li>

                    <li class="page-item">
                        <a @click="setCurrentPageIndex(currentPageIndex + 1)"
                            :class="{ 'page-link custom-link': currentPageIndex !== totalPageCount, 'page-link custom-link disabled': currentPageIndex === totalPageCount }">
                            Next
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
.custom-link {
    cursor: pointer;
}
</style>
   
<script>
//import { googleConfig } from '../config.js'
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
    name: 'ButtonTestA',
    computed: {
        ...mapGetters(['cityPagination', 'totalPageCount']),
        ...mapState(['currentPageIndex'])
    },
    methods: {
        updateCheckedStatusHandler(event,item) {  
            const payload = { id: item.id, isChecked: event.target.checked }
            this.setCheckedStatus(payload)
        },
        ...mapMutations(['setCurrentPageIndex', 'setCheckedStatus', 'deleteCities']),
    },

}

</script>

