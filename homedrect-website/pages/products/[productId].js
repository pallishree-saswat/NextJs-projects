import {useRouter} from "next/router";

const productId = () => {

const router = useRouter();
const {productId} = router.query;

  return <div>id is {productId}</div>;
};

export default productId;
