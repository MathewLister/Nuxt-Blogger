import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            { id: '1', title: 'First Post', previewText: 'ssdflkj sdlfkjsdlksf...', thumbnail: 'https://www.industryconnect.org/wp-content/uploads/2018/10/nztech.jpg' },
                            { id: '2', title: 'Second Post', previewText: 'ssdflkj sdlfkjsdlksf...', thumbnail: 'https://www.industryconnect.org/wp-content/uploads/2018/10/nztech.jpg' },
                            { id: '3', title: 'Third Post', previewText: 'ssdflkj sdlfkjsdlksf...', thumbnail: 'https://www.industryconnect.org/wp-content/uploads/2018/10/nztech.jpg' }
                        ]);
                        resolve();
                    }, 1000);  
                });
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore