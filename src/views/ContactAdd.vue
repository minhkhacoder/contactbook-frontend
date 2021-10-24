<template>
        <h4>Thêm liên hệ mới</h4>
        <ContactFormAdd 
            @contact-submit="createContact" 
            @contact-delete="deleteContact" 
        />
</template>

<script>
    import ContactService from "../services/contact.service"; 
    import ContactFormAdd from "../components/ContactFormAdd";

    export default {
        name: "ContactAdd",
        components: { 
            ContactFormAdd, 
        },
        data() { 
            return { 
                contact: null, message: "", 
            }; 
        },
        methods: {
            async getContact(id) { 
                const [error, response] = await this.handle(ContactService.get(id)); 
                if (error) { 
                    console.log(error); 
                } else { 
                    this.contact = response.data; 
                    console.log(response.data); 
                } 
            },
            async createContact(data) { 
                const [error, response] = await this.handle( 
                    ContactService.create(this.contact, data) 
                );
                if (error) { 
                    console.log(error); 
                } else { 
                    console.log(response.data); 
                    this.message = "Liên hệ được cập nhật thành công."; 
                } 
            },
            async updateContact(data) { 
                const [error, response] = await this.handle( 
                    ContactService.update(this.contact.id, data) 
                );
                if (error) { 
                    console.log(error); 
                } else { 
                    console.log(response.data); 
                    this.message = "Liên hệ được tạo thành công."; 
                } 
            },
            async deleteContact() { 
                const [error, response] = await this.handle( 
                    ContactService.delete(this.contact.id) 
                );
                if (error) { 
                    console.log(error); 
                } else { 
                    console.log(response.data); // Chuyển sang route /contactbook 
                    this.$router.push({ name: "ContactBook" }); 
                } 
            },
        },
        mounted() { 
            this.message = ""; 
            this.getContact(this.$route.params.id); 
        },
    }
</script>


