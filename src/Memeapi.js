export default async function getmemes(){
    const data = await fetch('https://api.imgflip.com/get_memes');
    return await data.json();
}