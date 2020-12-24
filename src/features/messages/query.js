const { strapi } = require("../../axios");

export const getMessagesByGq = async () => {
    let gq = `
        query{
            orders{
            id
            text
            created_at
            visitor{
                id
                chat_id
                username
            }
            users_permissions_user{
                username
                id
            }
            type{
                id
                name
            }
            checked
            }
        }
    `;

    const data = await strapi.request('post', 'graphql', {
        data: {
            query: gq
        }
    })

    return data.data

};

export const getMessagesTypeByGq = async (key, { type }) => {
    let gq = `
          query{
              orders(where:{type:{name:"${type}"}}){
              id
              text
              created_at
              favourite
              visitor{
                  id
                  chat_id
                  username
              }
              users_permissions_user{
                  username
                  id
              }
              type{
                  id
                  name
              }
              checked
              }
          }
      `;

    const data = await strapi.request('post', 'graphql', {
        data: {
            query: gq
        }
    })

    return data.data

};

export const setChecked = async ({ id }) => {
    const data = await strapi.updateEntry('orders', id, {
        checked: true
    })    
}
