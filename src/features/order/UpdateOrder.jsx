import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  

  return (
    <fetcher.Form method="PATCH" className="text-right flex justify-end gap-2">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({request,params}) {
  
  const newData = {
    priority: true,
  }
  console.log('new data in update order: ',newData);
  
  await updateOrder(params.orderId,  newData);

  return null;
}