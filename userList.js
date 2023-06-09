const tbody = document.getElementById('tbodyUserList');

window.onload = () => {
  getApiUserList();
  // setInterval(getApiUserList, 5000);
};

const getApiUserList = async () => {
  tbody.innerHTML = '';
  showloading();
  const responseData = await axios({
    url: 'https://reqres.in/api/users?page=1',
    method: 'get',
  });

  console.log(responseData);
  if (responseData.data.data[0].id == undefined) {
    alert('Userlist not found');
    removeloading();
  } else {
    for (let i = 0; i < responseData.data.data.length; i++) {
      tbody.innerHTML += `<tr>
      <td>
      <img src="${responseData.data.data[i].avatar}">
      </td>
      <td>${responseData.data.data[i].id}</td>
      <td>${responseData.data.data[i].email}</td>
      <td>${responseData.data.data[i].first_name}</td>
      <td>${responseData.data.data[i].last_name}</td>
  </tr>`;
    }
    removeloading();
  }
};
