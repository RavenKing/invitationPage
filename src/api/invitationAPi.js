import request from "./_request";
function sendInvitationApi(data) {
    return request({
        url: "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth",
        method: 'post',
        data: data
    });
}export {
    sendInvitationApi,

}