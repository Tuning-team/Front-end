const shareKakao = (data) => {
  console.log(data);
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init("619cfb7c202434b27d1c685581b2544f");
  }
  window.Kakao.Link.sendCustom({
    templateId: 82977,
    templateArgs: {
      THU: data[0],
      THU2: data[1],
      THU3: data[2],
      title: data[3],
      description: data[4],
      param: data[5],
    },
  });
};
export default shareKakao;
