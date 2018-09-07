export function handleApiErrors(result){
  if (result.code != 200){
    return {
      error : {message :'Unknown api error'}
    };
  }
}
