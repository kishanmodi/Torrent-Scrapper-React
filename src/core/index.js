import axios from 'axios';


export const getTorrentData = async (link) => {
    try {
        const torrentData = await axios.get(`https://la1ghi.deta.dev/magnet?link=${link}`);

        if (!torrentData.data)
            throw new Error("Data not available")

        return { status: true, data: torrentData.data };
    } catch (err) {
        console.log(err);
        return { err: err, status: false };
    }
};