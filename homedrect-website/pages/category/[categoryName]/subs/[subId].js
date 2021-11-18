import { useRouter } from "next/router";

function subId() {
  const router = useRouter();
  const { subId, categoryName } = router.query;
  return (
    <div>
      Category name is {categoryName} and sub category name is {subId}
    </div>
  );
}

export default subId;
