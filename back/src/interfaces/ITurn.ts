export interface Appointment {
    id: number;
    date: string;
    time: string;
    userId: number;
    status: "active" | "cancelled";
  }

  //    :::Appointment === turns(en cualquier referencia):::